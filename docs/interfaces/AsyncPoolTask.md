[**@aherve/async-pool v1.0.1**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolTask

# Interface: AsyncPoolTask\<T\>

Defined in: [index.ts:37](https://github.com/aherve/async-queue/blob/7b69ea491265f5b94725ad0bbfb5b59e83bb9d95/src/index.ts#L37)

Represents a task to be executed in the AsyncPool.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:45](https://github.com/aherve/async-queue/blob/7b69ea491265f5b94725ad0bbfb5b59e83bb9d95/src/index.ts#L45)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:41](https://github.com/aherve/async-queue/blob/7b69ea491265f5b94725ad0bbfb5b59e83bb9d95/src/index.ts#L41)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
