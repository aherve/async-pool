import test from 'node:test'
import assert from 'node:assert/strict'

import { AsyncQueue } from '../src/async-queue.ts'

test('queue can be created with no options', () => {
  const queue = new AsyncQueue()
  assert.strictEqual(queue.options.maxConcurrency, -1)
})
test('queue can be created with options', () => {
  const queue = new AsyncQueue({
    maxConcurrency: 5,
  })
  assert.strictEqual(queue.options.maxConcurrency, 5)
})
test('options can be set after creation', () => {
  const queue = new AsyncQueue() //
    .withConcurrency(10)
    .withRetries(3)

  assert.strictEqual(queue.options.maxConcurrency, 10)
  assert.strictEqual(queue.options.maxRetries, 3)
})

test('it works with low maxConcurrency', async () => {
  const queue = new AsyncQueue<number>()
    .withConcurrency(1)
    .enqueue({ task: async () => 1 })
    .enqueue({ task: async () => 2 })
    .enqueue({ task: async () => 3 })

  const results = await queue.all()
  assert.deepEqual(results.sort(), [1, 2, 3])
})
test('it pauses at concurrency = 0', async () => {
  let didSomething = false
  new AsyncQueue()
    .withConcurrency(0)
    .enqueue({ task: async () => { didSomething = true } })

  await new Promise((resolve) => setTimeout(resolve, 100))
  assert.strictEqual(didSomething, false, 'task should not have been executed with concurrency 0')
})
test('cannot enqueue a new task after it terminated', async () => {
  const queue = new AsyncQueue()
    .enqueue({ task: async () => 1 })
    .enqueue({ task: async () => 2 })

  await queue.waitForTermination()

  assert.throws(() => {
    queue.enqueue({ task: async () => 3 })
  }, /Cannot enqueue a task after the queue has been terminated/)
})

test('it can return results as an array', async () => {
  const queue = new AsyncQueue()
    .enqueue({ task: async () => 1 })
    .enqueue({ task: async () => 'foo' })
    .enqueue({ task: async () => true, maxRetries: 2 })

  const results = await queue.all()
  assert.deepEqual(results.sort(), [1, 'foo', true])
})
test('it can yield results as stream', async () => {
  const results: number[] = []
  const queue = new AsyncQueue<number>()
    .enqueue({ task: async () => 1 })
    .enqueue({ task: async () => 2 })

  // wait for some time, the queue will empty but it should not yet terminate
  await new Promise((resolve) => setTimeout(resolve, 100))
  queue.enqueue({ task: async () => 3 })

  for await (const result of queue.results()) {
    results.push(result)
  }
  assert.deepEqual(results.sort(), [1, 2, 3])
})
test('it can process tasks without returning results', async () => {
  const boundResults: number[] = []
  const queue = new AsyncQueue<number>()
    .withConcurrency(2)
    .enqueue({ task: async () => boundResults.push(1) })
    .enqueue({ task: async () => boundResults.push(2) })
    .enqueue({ task: async () => boundResults.push(3) })

  await queue.waitForTermination()

  assert.deepEqual(boundResults.sort(), [1, 2, 3])
})

test('it fails', async () => {
  const queue = new AsyncQueue().withRetries(2)
  const err = new Error('nope')
  queue.enqueue({
    task: () => Promise.reject(err),
  })

  await assert.rejects(
    async () => { await queue.all() },
    err,
  )
})
test('it retries tasks', async () => {
  const flaky = async () => {
    if (Math.random() < 0.5) {
      throw new Error('flaky task failed')
    }
    return 'success'
  }

  const q = new AsyncQueue<string>().withRetries(20)

  q.enqueue({ task: flaky })
    .enqueue({ task: flaky })
    .enqueue({ task: flaky })
    .enqueue({ task: flaky })
    .enqueue({ task: flaky })
    .enqueue({ task: flaky })

  let results: Array<string> = []
  await assert.doesNotReject(async () => results = await q.all())
  assert.deepEqual(results, ['success', 'success', 'success', 'success', 'success', 'success'])
})

test('it can handle recursive tasks', async () => {
  const queue = new AsyncQueue()

  const recTask = async (n: number) => {
    if (n > 0) {
      queue.enqueue({ task: () => recTask(n - 1) })
    }
    return n
  }

  queue.enqueue({ task: () => recTask(3) })

  const results = await queue.all()
  assert.deepEqual(results, [0, 1, 2, 3])
})

test('it respects maxConcurrency', async () => {

  let canResolve = false
  const started: Array<number> = []

  const hangingTask = async (i: number) => {
    started.push(i)
    while (!canResolve) {
      await new Promise(resolve => setTimeout(resolve, 10))
    }
  }

  const queue = new AsyncQueue()
    .withConcurrency(2)
    .enqueue({ task: () => hangingTask(1) })
    .enqueue({ task: () => hangingTask(2) })
    .enqueue({ task: () => hangingTask(3) })
    .enqueue({ task: () => hangingTask(4) })
    .enqueue({ task: () => hangingTask(5) })

  assert.deepEqual(started.sort(), [1, 2], 'should start only 2 tasks due to maxConcurrency')

  // release all tasks to avoid hanging the test
  canResolve = true
  await queue.waitForTermination()
  assert.deepEqual(started.sort(), [1, 2, 3, 4, 5], 'promises eventually resolved')
})

test('default behaviour has no max concurrency', async () => {

  let canResolve = false
  const started: Array<number> = []

  const hangingTask = async (i: number) => {
    started.push(i)
    while (!canResolve) {
      await new Promise(resolve => setTimeout(resolve, 10))
    }
  }

  new AsyncQueue()
    .enqueue({ task: () => hangingTask(1) })
    .enqueue({ task: () => hangingTask(2) })
    .enqueue({ task: () => hangingTask(3) })
    .enqueue({ task: () => hangingTask(4) })
    .enqueue({ task: () => hangingTask(5) })

  assert.deepEqual(started.sort(), [1, 2, 3, 4, 5], 'no max concurrency, all tasks started immediately')

  // release all tasks to avoid hanging the test
  canResolve = true
})
