# Async Pool

A concurrent pool for Node.js and browsers, supporting consuming result via promises, and generators.

![NPM Version](https://img.shields.io/npm/v/%40aherve%2Fasync-pool)
![NPM Downloads](https://img.shields.io/npm/dm/%40aherve%2Fasync-pool)
![NPM License](https://img.shields.io/npm/l/%40aherve%2Fasync-pool)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40aherve%2Fasync-pool)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/aherve/async-pool/test.yml)


## Features

- **Concurrency Control:** Limit the number of promises running at the same time.
- **Memory Efficiency:** Can process large numbers of tasks without having to build a large arrays of results.
- **Flexible API:** Supports both async iteration and promise-based consumption.

## Installation

```bash
npm install @aherve/async-pool
```

```typescript
// with TypeScript or ES Modules
import { AsyncPool } from "@aherve/async-pool";

// or with CommonJS
const AsyncPool = require("@aherve/async-pool").AsyncPool;
```

## Usage

### Consume results as a stream

```typescript
const pool = new AsyncPool<boolean>() // generic can optionally be used
  .withConcurrency(10)
  .withRetries(3); // default number of retries for each task unless specified at task level


// Processing will start as soon as the first task is added
for await (const document of largeDBCollectionScanner) {
  pool.add({
    task: () => updateDBDoc(document), // assuming this returns a Promise<boolean>
  })
}

// results can be consumed as a stream, without building a large array of results
let total = 0;
for await (const update of pool.results()) {
  if update.changed { 
    total++
  }
}

console.log("Successfully updated", total, "documents");
```

### Headless processsing

Fire and forget tasks, with controlled concurrency and retries

```typescript

const pool = new AsyncPool()
  .withConcurrency(10)
  .withRetries(3)
  .add({ task: () => doSomethingAsync() })
  .add({ task: () => doSomethingElse() })

// wait until all tasks are processed
await pool.waitForTermination();

// At this point, all promises have been resolved successfully
```

### Promise-based consumption

Similar to `Promise.all`, but with controlled concurrency and builtin retries

```typescript
const pool = new AsyncPool();

pool.add({ task: async () => 1 });
pool.add({ task: async () => true });
pool.add({ task: async () => "hello" });

const results = await pool.all();
console.log(results); // [1, true, "hello"], order not guaranteed (especially if retries happened)
```

### Using generic typings

You can specify a generic type for the `AsyncPool` to enforce type safety on the results of the tasks. If you don't specify a type, it will default to `unknown`, allowing any type of result.

```typescript
const typedPool = new AsyncPool<string>();

typedPool.add({ task: async () => "hello" }); // OK
typedPool.add({ task: async () => 1 }); // ❌ Error: Type 'Promise<number>' is not assignable to type 'Promise<string>'.

// typedPool.all() will return a Promise<string[]>, typedPool.results() is an AsyncGenerator<string>

const relaxedPool = new AsyncPool();

relaxedPool.add({ task: async () => "hello" }); // OK
relaxedPool.add({ task: async () => 1 }); // OK

// relaxedPool.all() will return a Promise<unknown[]>, relaxedPool.results() is an AsyncGenerator<unknown>
```

## API Documentation

[API docs](./docs/globals.md)
