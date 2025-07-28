**@aherve/async-queue v1.0.1**

***

# Async Queue

`AsyncQueue` is a utility class designed to efficiently process large numbers of asynchronous tasks (Promises) with controlled concurrency, without having to accumulate large arrays of results in memory. This makes it ideal for scenarios where you need to process thousands or millions of items asynchronously, but want to avoid memory bloat and control how many tasks run in parallel.

## Features

- **Concurrency Control:** Limit the number of promises running at the same time.
- **Memory Efficiency:** Results are yielded or handled as soon as they are available, so you don't need to store all results in an array.
- **Flexible API:** Supports both async iteration and promise-based consumption.

## Usage

TODO

## API Documentation

[API docs](_media/globals.md)
