# Async Queue

Process asynchronous tasks with controlled max concurrency and memory efficiency.

[![npm version](https://img.shields.io/npm/v/@aherve/async-queue.svg)](https://www.npmjs.com/package/@aherve/async-queue)
[![npm downloads](https://img.shields.io/npm/dm/@aherve/async-queue.svg)](https://www.npmjs.com/package/@aherve/async-queue)

## Features

- **Concurrency Control:** Limit the number of promises running at the same time.
- **Memory Efficiency:** Results are yielded or handled as soon as they are available, so you don't need to store all results in an array.
- **Flexible API:** Supports both async iteration and promise-based consumption.

## Usage

### Consume results as a stream
```typescript
const queue = new AsyncQueue<number>() // generic can optionally be used 
  .withConcurrency(10)
  .withRetries(3); // default number of retries for each task unless specified at task level

// enqueue many tasks
for (let i = 0; i < 100; i++) {
  queue.enqueue({
    task: async () => 2 * i,
    maxRetries: 3, // optional, will override the queue's default when set
  });
}

// consume results as a stream, without building a large array of results
let sum = 0;
for await (const res of queue.results()) {
  sum += res;
}

console.log("Sum:", sum); // "Sum: 9900"
```

### Headless processsing

Useful to make sure all tasks are processed without needing to consume results.

```typescript
const task = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log("hello, world");
};

// create queue and add some tasks
const queue = new AsyncQueue()
  .withConcurrency(10)
  .withRetries(3)
  .enqueue({ task })
  .enqueue({ task })
  .enqueue({ task });

// wait until all tasks are processed
await queue.waitForTermination();
```

### Promise-based consumption

Similar to `Promise.all`, but with controlled concurrency and builtin retries

```typescript
const queue = new AsyncQueue();

queue.enqueue({ task: async () => 1 });
queue.enqueue({ task: async () => true });
queue.enqueue({ task: async () => "hello" });

const results = await queue.all();
console.log(results); // [1, true, "hello"], order not guaranteed (especially if retries happened)
```

### Using generic typings

You can specify a generic type for the `AsyncQueue` to enforce type safety on the results of the tasks. If you don't specify a type, it will default to `unknown`, allowing any type of result.

```typescript
const typedQueue = new AsyncQueue<string>();

typedQueue.enqueue({ task: async () => "hello" }); // OK
typedQueue.enqueue({ task: async () => 1 }); // ❌ Error: Type 'Promise<number>' is not assignable to type 'Promise<string>'.

// typedQueue.all() will return a Promise<string[]>, typedQueue.results() is an AsyncGenerator<string>

const relaxedQueue = new AsyncQueue();

relaxedQueue.enqueue({ task: async () => "hello" }); // OK
relaxedQueue.enqueue({ task: async () => 1 }); // OK

// relaxedQueue.all() will return a Promise<unknown[]>, relaxedQueue.results() is an AsyncGenerator<unknown>
```

## API Documentation

[API docs](./docs/globals.md)
