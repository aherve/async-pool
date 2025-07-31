[**@aherve/async-pool v1.0.1**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolTask

# Interface: AsyncPoolTask\<T\>

Defined in: [index.ts:39](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L39)

Represents a task to be executed in the AsyncPool.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:47](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L47)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:43](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L43)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
