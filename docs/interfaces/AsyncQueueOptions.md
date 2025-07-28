[**@aherve/async-queue v1.0.0**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueOptions

# Interface: AsyncQueueOptions

Defined in: [async-queue.ts:6](https://github.com/aherve/async-queue/blob/d222be9346d1de27cbacdc3576696f3bada5eda3/src/async-queue.ts#L6)

Options for configuring the AsyncQueue.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [async-queue.ts:10](https://github.com/aherve/async-queue/blob/d222be9346d1de27cbacdc3576696f3bada5eda3/src/async-queue.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [async-queue.ts:14](https://github.com/aherve/async-queue/blob/d222be9346d1de27cbacdc3576696f3bada5eda3/src/async-queue.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
