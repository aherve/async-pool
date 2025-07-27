[**@aherve/async-queue v0.0.10**](../README.md)

***

[@aherve/async-queue](../README.md) / AsyncQueueOptions

# Interface: AsyncQueueOptions

Defined in: [src/async-queue.ts:6](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L6)

Options for configuring the AsyncQueue.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [src/async-queue.ts:10](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/async-queue.ts:14](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
