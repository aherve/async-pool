[**@aherve/async-pool v1.0.4**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolTask

# Interface: AsyncPoolTask\<T\>

Defined in: [index.ts:35](https://github.com/aherve/async-pool/blob/4d2ae93d542f8ba2d725679b45aaa0484218fc40/src/index.ts#L35)

Represents a task to be executed in the AsyncPool.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:43](https://github.com/aherve/async-pool/blob/4d2ae93d542f8ba2d725679b45aaa0484218fc40/src/index.ts#L43)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:39](https://github.com/aherve/async-pool/blob/4d2ae93d542f8ba2d725679b45aaa0484218fc40/src/index.ts#L39)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
