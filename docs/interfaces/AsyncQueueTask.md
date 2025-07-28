[**@aherve/async-queue v1.0.0**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueTask

# Interface: AsyncQueueTask\<T\>

Defined in: [async-queue.ts:35](https://github.com/aherve/async-queue/blob/d222be9346d1de27cbacdc3576696f3bada5eda3/src/async-queue.ts#L35)

Represents a task to be executed in the AsyncQueue.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [async-queue.ts:43](https://github.com/aherve/async-queue/blob/d222be9346d1de27cbacdc3576696f3bada5eda3/src/async-queue.ts#L43)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [async-queue.ts:39](https://github.com/aherve/async-queue/blob/d222be9346d1de27cbacdc3576696f3bada5eda3/src/async-queue.ts#L39)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
