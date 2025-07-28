**@aherve/async-queue v1.0.3**

***

# Async Queue

`AsyncQueue` is a utility class designed to efficiently process large numbers of asynchronous tasks (Promises) with controlled concurrency, without having to accumulate large arrays of results in memory. This makes it ideal for scenarios where you need to process thousands or millions of items asynchronously, but want to avoid memory bloat and control how many tasks run in parallel.

## Features

- **Concurrency Control:** Limit the number of promises running at the same time.
- **Memory Efficiency:** Results are yielded or handled as soon as they are available, so you don't need to store all results in an array.
- **Flexible API:** Supports both async iteration and promise-based consumption.

## Usage

### Consume results as a stream
```typescript
const queue = new AsyncQueue<number>()
  .withConcurrency(10)
  .withRetries(3); // can be overridden when enqueuing tasks

// enqueue many tasks
for (let i = 0; i < 100; i++) {
  queue.enqueue({
    task: async () => 2 * i,
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

## API Documentation

[API docs](_media/globals.md)
