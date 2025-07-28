[**@aherve/async-queue v1.0.1**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueOptions

# Interface: AsyncQueueOptions

Defined in: [index.ts:6](https://github.com/aherve/async-queue/blob/cf2d7bf991268bbe4aebf1725f18a3fc1770ec33/src/index.ts#L6)

Options for configuring the AsyncQueue.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [index.ts:10](https://github.com/aherve/async-queue/blob/cf2d7bf991268bbe4aebf1725f18a3fc1770ec33/src/index.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:14](https://github.com/aherve/async-queue/blob/cf2d7bf991268bbe4aebf1725f18a3fc1770ec33/src/index.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
