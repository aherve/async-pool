import { Readable } from "node:stream";

export type AsyncQueueOptions = {
  maxConcurrency: number;
  maxRetries: number;
  terminateWhenEmpty: boolean;
};
const DEFAULT_OPTIONS: AsyncQueueOptions = {
  maxConcurrency: 0,
  maxRetries: 0,
  terminateWhenEmpty: false,
};

export type AsyncQueueTask<T> = {
  task: () => Promise<T>;
  maxRetries: number;
};

export class AsyncQueue<T = unknown> extends Readable {
  public options: AsyncQueueOptions;
  private idCounter: number = 0;
  private tasks: Array<AsyncQueueTask<T>> = [];
  private inFlight: Map<string, Promise<void>> = new Map();

  public constructor(opts?: Partial<AsyncQueueOptions>) {
    super({ objectMode: true });
    this.options = { ...DEFAULT_OPTIONS, ...opts };
  }

  public terminateWhenEmpty(): this {
    this.options.terminateWhenEmpty = true;
    return this;
  }

  public keepAlive(): this {
    this.options.terminateWhenEmpty = false;
    return this;
  }

  public withConcurrency(maxConcurrency: number): this {
    this.options.maxConcurrency = maxConcurrency;
    return this;
  }

  public withRetries(maxRetries: number): this {
    this.options.maxRetries = maxRetries;
    return this;
  }

  public enqueue(
    task: Omit<AsyncQueueTask<T>, "maxRetries"> & { maxRetries?: number },
  ): this {
    this.tasks.push({
      ...task,
      maxRetries: task.maxRetries ?? this.options.maxRetries,
    });
    this.work();
    return this;
  }

  public async *results(): AsyncGenerator<T> {
    this.terminateWhenEmpty();
    for await (const result of this) {
      yield result as T;
    }
  }

  public async all(): Promise<T[]> {
    const results: T[] = [];
    this.terminateWhenEmpty();
    for await (const result of this) {
      results.push(result);
    }
    return results;
  }

  public async waitForTermination(): Promise<void> {
    this.terminateWhenEmpty();
    for await (const _ of this) {
    }
  }

  public _read() {
    this.work();
  }

  private getId(): string {
    return `${this.idCounter++}`;
  }

  private work() {
    // terminate condition
    if (
      this.tasks.length === 0 &&
      this.inFlight.size === 0 &&
      this.options.terminateWhenEmpty
    ) {
      this.push(null);
      return;
    }

    const capacity =
      this.options.maxConcurrency > 0
        ? this.options.maxConcurrency - this.inFlight.size
        : this.tasks.length;

    for (const task of this.tasks.splice(0, capacity)) {
      const id = this.getId();
      this.inFlight.set(
        id,
        (async () => {
          try {
            const result = await task.task();
            this.push(result);
          } catch (error) {
            if (task.maxRetries > 0) {
              this.enqueue({
                ...task,
                maxRetries: task.maxRetries - 1,
              });
            } else {
              this.destroy(
                error instanceof Error ? error : new Error(error as string),
              );
            }
          } finally {
            this.inFlight.delete(id);
            this.work();
          }
        })(),
      );
    }
  }
}
