[**@aherve/async-queue v1.0.2**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueOptions

# Interface: AsyncQueueOptions

Defined in: [index.ts:6](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L6)

Options for configuring the AsyncQueue.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [index.ts:10](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:14](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
