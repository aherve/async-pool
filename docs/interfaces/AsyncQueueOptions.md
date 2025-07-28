[**@aherve/async-queue v0.0.10**](../README.md)

***

[@aherve/async-queue](../README.md) / AsyncQueueOptions

# Interface: AsyncQueueOptions

Defined in: [async-queue.ts:6](https://github.com/aherve/async-queue/blob/b34e2361b70e7e74a79ab0f5d036d339cd86a410/src/async-queue.ts#L6)

Options for configuring the AsyncQueue.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [async-queue.ts:10](https://github.com/aherve/async-queue/blob/b34e2361b70e7e74a79ab0f5d036d339cd86a410/src/async-queue.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [async-queue.ts:14](https://github.com/aherve/async-queue/blob/b34e2361b70e7e74a79ab0f5d036d339cd86a410/src/async-queue.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
