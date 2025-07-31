import test from 'node:test';
import assert from 'node:assert/strict';

import { AsyncPool } from '../src/index.ts';

test('pool can be created with no options', () => {
  const pool = new AsyncPool();
  assert.strictEqual(pool.options.maxConcurrency, -1);
});
test('pool can be created with options', () => {
  const pool = new AsyncPool({
    maxConcurrency: 5,
  });
  assert.strictEqual(pool.options.maxConcurrency, 5);
});
test('options can be set after creation', () => {
  const pool = new AsyncPool() //
    .withConcurrency(10)
    .withRetries(3);

  assert.strictEqual(pool.options.maxConcurrency, 10);
  assert.strictEqual(pool.options.maxRetries, 3);
});

test('it works with low maxConcurrency', async () => {
  const pool = new AsyncPool<number>()
    .withConcurrency(1)
    .add({ task: async () => 1 })
    .add({ task: async () => 2 })
    .add({ task: async () => 3 });

  const results = await pool.all();
  assert.deepEqual(results.sort(), [1, 2, 3]);
});
test('it pauses at concurrency = 0', async () => {
  let didSomething = false;
  new AsyncPool().withConcurrency(0).add({
    task: async () => {
      didSomething = true;
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 100));
  assert.strictEqual(didSomething, false, 'task should not have been executed with concurrency 0');
});
test('cannot add a new task after it terminated', async () => {
  const pool = new AsyncPool().add({ task: async () => 1 }).add({ task: async () => 2 });

  await pool.waitForTermination();

  assert.throws(() => {
    pool.add({ task: async () => 3 });
  }, /Cannot add a task after the pool has been terminated/);
});

test('it can return results as an array', async () => {
  const pool = new AsyncPool()
    .add({ task: async () => 1 })
    .add({ task: async () => 'foo' })
    .add({ task: async () => true, maxRetries: 2 });

  const results = await pool.all();
  assert.deepEqual(results.sort(), [1, 'foo', true]);
});
test('it can return results in safe mode', async () => {
  const queue = new AsyncPool()
    .add({ task: async () => 1 })
    .add({ task: async () => 'foo' })
    .add({
      task: async () => {
        throw new Error('oops');
      },
    })
    .add({ task: async () => 'ok' });

  const results = await queue.safeAll();
  assert.deepEqual(results, [
    { success: true, data: 1 },
    { success: true, data: 'foo' },
    { success: false, error: new Error('oops') },
    { success: true, data: 'ok' },
  ]);
});
test('it can yield results as stream', async () => {
  const results: number[] = [];
  const pool = new AsyncPool<number>().add({ task: async () => 1 }).add({ task: async () => 2 });

  // wait for some time, the pool will empty but it should not yet terminate
  await new Promise((resolve) => setTimeout(resolve, 100));
  pool.add({ task: async () => 3 });

  for await (const result of pool.results()) {
    results.push(result);
  }
  assert.deepEqual(results.sort(), [1, 2, 3]);
});
test('it can yield results in safe mode', async () => {
  const err = new Error('oops');
  const results: Array<unknown> = [];
  const queue = new AsyncPool<number>()
    .add({ task: async () => 1 })
    .add({ task: async () => 2 })
    .add({
      task: async () => {
        throw err;
      },
    })
    .add({ task: async () => 3 });

  for await (const result of queue.safeResults()) {
    if (result.success) {
      results.push(result.data);
    } else {
      results.push(result.error.message);
    }
  }
  assert.deepEqual(results, [1, 2, err.message, 3]);
});
test('it can process tasks without returning results', async () => {
  const boundResults: number[] = [];
  const pool = new AsyncPool<number>()
    .withConcurrency(2)
    .add({ task: async () => boundResults.push(1) })
    .add({ task: async () => boundResults.push(2) })
    .add({ task: async () => boundResults.push(3) });

  await pool.waitForTermination();

  assert.deepEqual(boundResults.sort(), [1, 2, 3]);
});

test('it fails', async () => {
  const pool = new AsyncPool().withRetries(2);
  const err = new Error('nope');
  pool.add({
    task: () => Promise.reject(err),
  });

  await assert.rejects(async () => {
    await pool.all();
  }, err);
});
test('it retries tasks', async () => {
  const flaky = async () => {
    if (Math.random() < 0.5) {
      throw new Error('flaky task failed');
    }
    return 'success';
  };

  const q = new AsyncPool<string>().withRetries(20);

  q.add({ task: flaky }).add({ task: flaky }).add({ task: flaky }).add({ task: flaky }).add({ task: flaky }).add({ task: flaky });

  let results: Array<string> = [];
  await assert.doesNotReject(async () => (results = await q.all()));
  assert.deepEqual(results, ['success', 'success', 'success', 'success', 'success', 'success']);
});

test('it can handle recursive tasks', async () => {
  const pool = new AsyncPool();

  const recTask = async (n: number) => {
    if (n > 0) {
      pool.add({ task: () => recTask(n - 1) });
    }
    return n;
  };

  pool.add({ task: () => recTask(3) });

  const results = await pool.all();
  assert.deepEqual(results, [0, 1, 2, 3]);
});

test('it respects maxConcurrency', async () => {
  let canResolve = false;
  const started: Array<number> = [];

  const hangingTask = async (i: number) => {
    started.push(i);
    while (!canResolve) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
  };

  const pool = new AsyncPool()
    .withConcurrency(2)
    .add({ task: () => hangingTask(1) })
    .add({ task: () => hangingTask(2) })
    .add({ task: () => hangingTask(3) })
    .add({ task: () => hangingTask(4) })
    .add({ task: () => hangingTask(5) });

  assert.deepEqual(started.sort(), [1, 2], 'should start only 2 tasks due to maxConcurrency');

  // release all tasks to avoid hanging the test
  canResolve = true;
  await pool.waitForTermination();
  assert.deepEqual(started.sort(), [1, 2, 3, 4, 5], 'promises eventually resolved');
});

test('default behaviour has no max concurrency', async () => {
  let canResolve = false;
  const started: Array<number> = [];

  const hangingTask = async (i: number) => {
    started.push(i);
    while (!canResolve) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
  };

  new AsyncPool()
    .add({ task: () => hangingTask(1) })
    .add({ task: () => hangingTask(2) })
    .add({ task: () => hangingTask(3) })
    .add({ task: () => hangingTask(4) })
    .add({ task: () => hangingTask(5) });

  assert.deepEqual(started.sort(), [1, 2, 3, 4, 5], 'no max concurrency, all tasks started immediately');

  // release all tasks to avoid hanging the test
  canResolve = true;
});
