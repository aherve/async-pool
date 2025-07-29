[**@aherve/async-pool v1.0.0**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolTask

# Interface: AsyncPoolTask\<T\>

Defined in: [index.ts:35](https://github.com/aherve/async-pool/blob/3c872e1e61e7932eda7e4946a4250d52e2732df1/src/index.ts#L35)

Represents a task to be executed in the AsyncPool.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:43](https://github.com/aherve/async-pool/blob/3c872e1e61e7932eda7e4946a4250d52e2732df1/src/index.ts#L43)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:39](https://github.com/aherve/async-pool/blob/3c872e1e61e7932eda7e4946a4250d52e2732df1/src/index.ts#L39)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
