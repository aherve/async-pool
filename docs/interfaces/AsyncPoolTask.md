[**@aherve/async-pool v1.1.0**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolTask

# Interface: AsyncPoolTask\<T\>

Defined in: [index.ts:37](https://github.com/aherve/async-queue/blob/bdeca7c9127a7fe5b6d0269f93a19d9920662c87/src/index.ts#L37)

Represents a task to be executed in the AsyncPool.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:45](https://github.com/aherve/async-queue/blob/bdeca7c9127a7fe5b6d0269f93a19d9920662c87/src/index.ts#L45)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:41](https://github.com/aherve/async-queue/blob/bdeca7c9127a7fe5b6d0269f93a19d9920662c87/src/index.ts#L41)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
