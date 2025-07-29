[**@aherve/async-pool v0.0.2**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPoolTask

# Interface: AsyncPoolTask\<T\>

Defined in: [index.ts:35](https://github.com/aherve/async-pool/blob/68f48d00d51f693dee5ffd1230b883af572ab677/src/index.ts#L35)

Represents a task to be executed in the AsyncPool.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:43](https://github.com/aherve/async-pool/blob/68f48d00d51f693dee5ffd1230b883af572ab677/src/index.ts#L43)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:39](https://github.com/aherve/async-pool/blob/68f48d00d51f693dee5ffd1230b883af572ab677/src/index.ts#L39)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
