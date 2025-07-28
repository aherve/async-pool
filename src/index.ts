import { Readable } from 'node:stream'

/**
 * Options for configuring the AsyncQueue.
 */
export interface AsyncQueueOptions {
  /**
   * The maximum number of tasks that can be processed concurrently.
   */
  maxConcurrency: number
  /**
   * The maximum number of times a task will be retried upon failure. Can be overridden per task.
   */
  maxRetries: number
}

/**
 * Default options for AsyncQueue.
 * @interface {AsyncQueueOptions}
 */
const DEFAULT_ASYNC_QUEUE_OPTIONS: AsyncQueueOptions = {
  /**
   * Default maximum concurrency is unlimited (-1).
   */
  maxConcurrency: -1,
  /**
   * Default maximum retries is 0 (no retries).
   */
  maxRetries: 0,
}

/**
 * Represents a task to be executed in the AsyncQueue.
 */
export interface AsyncQueueTask<T> {
  /**
   * The asynchronous task to be executed.
   */
  task: () => Promise<T>
  /**
   * Override the maximum number of retries for this specific task.
   */
  maxRetries: number
}

/**
 * An asynchronous queue that manages concurrent execution of tasks with retry and termination options.
 * @template T
 */
export class AsyncQueue<T = unknown> {
  /**
   * The options for this queue instance.
   * @type {AsyncQueueOptions}
   */
  readonly options: AsyncQueueOptions

  private idCounter: number = 0
  private tasks: Array<AsyncQueueTask<T>> = []
  private inFlight: Map<string, Promise<void>> = new Map()
  private _terminateWhenEmpty: boolean = false
  private stream: Readable

  /**
   * Creates an instance of AsyncQueue.
   * @param opts Optional configuration options to override the default AsyncQueue options.
   */
  public constructor(opts?: Partial<AsyncQueueOptions>) {
    this.options = { ...DEFAULT_ASYNC_QUEUE_OPTIONS, ...opts }

    this.stream = new Readable({
      objectMode: true,
      read: () => {
        this.work()
      },
    })
  }

  /**
   * Sets the queue to terminate when empty.
   * @returns {this}
   */
  public terminateWhenEmpty(): this {
    this._terminateWhenEmpty = true
    return this
  }

  /**
   * Keeps the queue alive even when empty (prevents termination).
   * @returns {this}
   */
  public keepAlive(): this {
    this._terminateWhenEmpty = false
    return this
  }

  /**
   * Sets the maximum concurrency for the queue.
   * @param {number} maxConcurrency - Maximum number of concurrent tasks. 0 means pause, <0 means unlimited.
   * @returns {this}
   */
  public withConcurrency(maxConcurrency: number): this {
    this.options.maxConcurrency = maxConcurrency
    return this
  }

  /**
   * Sets the maximum number of retries for tasks.
   * @param {number} maxRetries - Maximum number of retries.
   * @returns {this}
   */
  public withRetries(maxRetries: number): this {
    this.options.maxRetries = maxRetries
    return this
  }

  /**
   * Enqueues a new task into the queue.
   * @param {Omit<AsyncQueueTask<T>, "maxRetries"> & { maxRetries?: number }} task - The task to enqueue.
   * @returns {this}
   */
  public enqueue(
    task: Omit<AsyncQueueTask<T>, 'maxRetries'> & { maxRetries?: number }
  ): this {

    // fail if our stream is closed
    if (this.stream.destroyed) {
      throw new Error(
        'Cannot enqueue a task after the queue has been terminated'
      )
    }

    this.tasks.push({
      ...task,
      maxRetries: task.maxRetries ?? this.options.maxRetries,
    })
    this.work()
    return this
  }

  /**
   * Returns an async generator yielding results as they complete.
   * @yields {T}
   */
  public async *results(): AsyncGenerator<T> {
    this.terminateWhenEmpty()
    for await (const result of this.stream) {
      yield result as T
    }
  }

  /**
   * Waits for all tasks to complete and returns their results as an array.
   * @returns {Promise<T[]>}
   */
  public async all(): Promise<T[]> {
    const results: T[] = []
    this.terminateWhenEmpty()
    for await (const result of this.stream) {
      results.push(result)
    }
    return results
  }

  /**
   * Waits for the queue to terminate (all tasks complete) without returning anything.
   * @returns {Promise<void>}
   */
  public async waitForTermination(): Promise<void> {
    this.terminateWhenEmpty()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const _ of this.stream) { }
  }

  private getId(): string {
    return `${this.idCounter++}`
  }

  private work() {
    // terminate condition
    if (
      this.tasks.length === 0 &&
      this.inFlight.size === 0 &&
      this._terminateWhenEmpty
    ) {
      this.stream.push(null)
      return
    }

    const capacity =
      this.options.maxConcurrency >= 0
        ? this.options.maxConcurrency - this.inFlight.size
        : this.tasks.length

    for (const task of this.tasks.splice(0, capacity)) {
      const id = this.getId()
      this.inFlight.set(
        id,
        (async () => {
          try {
            const result = await task.task()
            this.stream.push(result)
          } catch (error) {
            if (task.maxRetries > 0) {
              this.enqueue({
                ...task,
                maxRetries: task.maxRetries - 1,
              })
            } else {
              this.stream.destroy(
                error instanceof Error ? error : new Error(error as string)
              )
            }
          } finally {
            this.inFlight.delete(id)
            this.work()
          }
        })()
      )
    }
  }
}

