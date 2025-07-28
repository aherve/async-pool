[**@aherve/async-queue v0.0.10**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueue

# Class: AsyncQueue\<T\>

Defined in: [async-queue.ts:44](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L44)

An asynchronous queue that manages concurrent execution of tasks with retry and termination options.

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new AsyncQueue**\<`T`\>(`opts?`): `AsyncQueue`\<`T`\>

Defined in: [async-queue.ts:60](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L60)

Creates an instance of AsyncQueue.

#### Parameters

##### opts?

`Partial`\<[`AsyncQueueOptions`](../interfaces/AsyncQueueOptions.md)\>

Optional configuration options to override the default AsyncQueue options.

#### Returns

`AsyncQueue`\<`T`\>

## Properties

### options

> `readonly` **options**: [`AsyncQueueOptions`](../interfaces/AsyncQueueOptions.md)

Defined in: [async-queue.ts:49](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L49)

The options for this queue instance.

## Methods

### all()

> **all**(): `Promise`\<`T`[]\>

Defined in: [async-queue.ts:148](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L148)

Waits for all tasks to complete and returns their results as an array.

#### Returns

`Promise`\<`T`[]\>

***

### enqueue()

> **enqueue**(`task`): `this`

Defined in: [async-queue.ts:114](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L114)

Enqueues a new task into the queue.

#### Parameters

##### task

`Omit`\<[`AsyncQueueTask`](../interfaces/AsyncQueueTask.md)\<`T`\>, `"maxRetries"`\> & `object`

The task to enqueue.

#### Returns

`this`

***

### keepAlive()

> **keepAlive**(): `this`

Defined in: [async-queue.ts:84](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L84)

Keeps the queue alive even when empty (prevents termination).

#### Returns

`this`

***

### results()

> **results**(): `AsyncGenerator`\<`T`\>

Defined in: [async-queue.ts:137](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L137)

Returns an async generator yielding results as they complete.

#### Returns

`AsyncGenerator`\<`T`\>

#### Yields

***

### terminateWhenEmpty()

> **terminateWhenEmpty**(): `this`

Defined in: [async-queue.ts:75](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L75)

Sets the queue to terminate when empty.

#### Returns

`this`

***

### waitForTermination()

> **waitForTermination**(): `Promise`\<`void`\>

Defined in: [async-queue.ts:161](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L161)

Waits for the queue to terminate (all tasks complete and queue is empty).

#### Returns

`Promise`\<`void`\>

***

### withConcurrency()

> **withConcurrency**(`maxConcurrency`): `this`

Defined in: [async-queue.ts:94](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L94)

Sets the maximum concurrency for the queue.

#### Parameters

##### maxConcurrency

`number`

Maximum number of concurrent tasks.

#### Returns

`this`

***

### withRetries()

> **withRetries**(`maxRetries`): `this`

Defined in: [async-queue.ts:104](https://github.com/aherve/async-queue/blob/b1a3fa730779fd1a0b263cc116938a6b04527f05/src/async-queue.ts#L104)

Sets the maximum number of retries for tasks.

#### Parameters

##### maxRetries

`number`

Maximum number of retries.

#### Returns

`this`
