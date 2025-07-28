[**@aherve/async-queue v1.0.2**](../README.md)

***

[@aherve/async-queue](../globals.md) / AsyncQueue

# Class: AsyncQueue\<T\>

Defined in: [index.ts:50](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L50)

An asynchronous queue that manages concurrent execution of tasks with retry and termination options.

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new AsyncQueue**\<`T`\>(`opts?`): `AsyncQueue`\<`T`\>

Defined in: [index.ts:67](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L67)

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

Defined in: [index.ts:55](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L55)

The options for this queue instance.

## Methods

### all()

> **all**(): `Promise`\<`T`[]\>

Defined in: [index.ts:155](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L155)

Waits for all tasks to complete and returns their results as an array.

#### Returns

`Promise`\<`T`[]\>

***

### enqueue()

> **enqueue**(`task`): `this`

Defined in: [index.ts:121](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L121)

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

Defined in: [index.ts:91](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L91)

Keeps the queue alive even when empty (prevents termination).

#### Returns

`this`

***

### results()

> **results**(): `AsyncGenerator`\<`T`\>

Defined in: [index.ts:144](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L144)

Returns an async generator yielding results as they complete.

#### Returns

`AsyncGenerator`\<`T`\>

#### Yields

***

### terminateWhenEmpty()

> **terminateWhenEmpty**(): `this`

Defined in: [index.ts:82](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L82)

Sets the queue to terminate when empty.

#### Returns

`this`

***

### waitForTermination()

> **waitForTermination**(): `Promise`\<`void`\>

Defined in: [index.ts:168](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L168)

Waits for the queue to terminate (all tasks complete) without returning anything.

#### Returns

`Promise`\<`void`\>

***

### withConcurrency()

> **withConcurrency**(`maxConcurrency`): `this`

Defined in: [index.ts:101](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L101)

Sets the maximum concurrency for the queue.

#### Parameters

##### maxConcurrency

`number`

Maximum number of concurrent tasks. 0 means pause, <0 means unlimited.

#### Returns

`this`

***

### withRetries()

> **withRetries**(`maxRetries`): `this`

Defined in: [index.ts:111](https://github.com/aherve/async-queue/blob/e93108370b797d602f1b12b7a3a4d7e7054b7972/src/index.ts#L111)

Sets the maximum number of retries for tasks.

#### Parameters

##### maxRetries

`number`

Maximum number of retries.

#### Returns

`this`
