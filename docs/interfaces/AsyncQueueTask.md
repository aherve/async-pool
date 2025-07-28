[**@aherve/async-queue v0.0.10**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueueTask

# Interface: AsyncQueueTask\<T\>

Defined in: [async-queue.ts:29](https://github.com/aherve/async-queue/blob/6d95f2106cc634e0c72cb04fed3ee46329140605/src/async-queue.ts#L29)

Represents a task to be executed in the AsyncQueue.

## Type Parameters

### T

`T`

## Properties

### maxRetries

> **maxRetries**: `number`

Defined in: [async-queue.ts:37](https://github.com/aherve/async-queue/blob/6d95f2106cc634e0c72cb04fed3ee46329140605/src/async-queue.ts#L37)

Override the maximum number of retries for this specific task.

***

### task()

> **task**: () => `Promise`\<`T`\>

Defined in: [async-queue.ts:33](https://github.com/aherve/async-queue/blob/6d95f2106cc634e0c72cb04fed3ee46329140605/src/async-queue.ts#L33)

The asynchronous task to be executed.

#### Returns

`Promise`\<`T`\>
