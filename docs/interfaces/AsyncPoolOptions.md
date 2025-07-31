[**@aherve/async-pool v1.0.1**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolOptions

# Interface: AsyncPoolOptions

Defined in: [index.ts:6](https://github.com/aherve/async-queue/blob/7b69ea491265f5b94725ad0bbfb5b59e83bb9d95/src/index.ts#L6)

Options for configuring the AsyncPool.

## Properties

### maxConcurrency

> **maxConcurrency**: `number`

Defined in: [index.ts:10](https://github.com/aherve/async-queue/blob/7b69ea491265f5b94725ad0bbfb5b59e83bb9d95/src/index.ts#L10)

The maximum number of tasks that can be processed concurrently.

***

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:14](https://github.com/aherve/async-queue/blob/7b69ea491265f5b94725ad0bbfb5b59e83bb9d95/src/index.ts#L14)

The maximum number of times a task will be retried upon failure. Can be overridden per task.
