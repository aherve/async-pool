[**@aherve/async-queue v0.0.10**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueOptions

# Interface: AsyncQueueOptions

Defined in: [async-queue.ts:6](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L6)

Options for configuring the AsyncQueue.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [async-queue.ts:10](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [async-queue.ts:14](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
