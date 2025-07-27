import test from "node:test";
import assert from "node:assert/strict";

import { AsyncQueue } from "../src/async-queue.ts";

test("creates new queue with no options", () => {
  const queue = new AsyncQueue();
  assert.strictEqual(queue.options.maxConcurrency, 0);
});
test("can pass options", () => {
  const queue = new AsyncQueue({
    maxConcurrency: 5,
  });
  assert.strictEqual(queue.options.maxConcurrency, 5);
});
test("can set options after creation", () => {
  const queue = new AsyncQueue() //
    .withConcurrency(10)
    .withRetries(3);

  assert.strictEqual(queue.options.maxConcurrency, 10);
  assert.strictEqual(queue.options.maxRetries, 3);
});

test("can return results as an array", async () => {
  const queue = new AsyncQueue()
    .enqueue({ task: async () => 1 })
    .enqueue({ task: async () => "foo" })
    .enqueue({ task: async () => true, maxRetries: 2 });

  const results = await queue.all();
  assert.deepEqual(results.sort(), [1, "foo", true]);
});
test("can read results as stream", async () => {
  const results: number[] = [];
  const queue = new AsyncQueue<number>()
    .enqueue({ task: async () => 1 })
    .enqueue({ task: async () => 2 });

  // wait for some time, the queue will empty but it should not yet terminate
  await new Promise((resolve) => setTimeout(resolve, 100));
  queue.enqueue({ task: async () => 3 });

  for await (const result of queue.results()) {
    results.push(result);
  }
  assert.deepEqual(results.sort(), [1, 2, 3]);
});
test("it can process tasks without returning results", async () => {
  const boundResults: number[] = [];
  const queue = new AsyncQueue<number>()
    .withConcurrency(2)
    .enqueue({ task: async () => boundResults.push(1) })
    .enqueue({ task: async () => boundResults.push(2) })
    .enqueue({ task: async () => boundResults.push(3) });

  await queue.waitForTermination();

  assert.deepEqual(boundResults.sort(), [1, 2, 3]);
});
