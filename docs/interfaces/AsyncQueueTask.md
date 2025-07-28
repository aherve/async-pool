[**@aherve/async-queue v1.0.4**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueTask

# Interface: AsyncQueueTask\<T\>

Defined in: [index.ts:35](https://github.com/aherve/async-queue/blob/f466e288cfdacb6a493af3934e0564e9a8521fae/src/index.ts#L35)

Represents a task to be executed in the AsyncQueue.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [index.ts:43](https://github.com/aherve/async-queue/blob/f466e288cfdacb6a493af3934e0564e9a8521fae/src/index.ts#L43)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [index.ts:39](https://github.com/aherve/async-queue/blob/f466e288cfdacb6a493af3934e0564e9a8521fae/src/index.ts#L39)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
