[**@aherve/async-pool v1.1.0**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPool

# Class: AsyncPool\<T\>

Defined in: [index.ts:52](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L52)

An asynchronous pool that manages concurrent execution of tasks with retry and termination options.

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new AsyncPool**\<`T`\>(`opts?`): `AsyncPool`\<`T`\>

Defined in: [index.ts:70](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L70)

Creates an instance of AsyncPool.

#### Parameters

##### opts?

`Partial`\<[`AsyncPoolOptions`](../interfaces/AsyncPoolOptions.md)\>

Optional configuration options to override the default AsyncPool options.

#### Returns

`AsyncPool`\<`T`\>

## Properties

### options

> `readonly` **options**: [`AsyncPoolOptions`](../interfaces/AsyncPoolOptions.md)

Defined in: [index.ts:57](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L57)

The options for this pool instance.

## Methods

### add()

> **add**(`task`): `this`

Defined in: [index.ts:124](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L124)

Enpools a new task into the pool.

#### Parameters

##### task

`Omit`\<[`AsyncPoolTask`](../interfaces/AsyncPoolTask.md)\<`T`\>, `"maxRetries"`\> & `object`

The task to add.

#### Returns

`this`

***

### all()

> **all**(): `Promise`\<`T`[]\>

Defined in: [index.ts:167](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L167)

Waits for all tasks to complete and returns their results as an array.

#### Returns

`Promise`\<`T`[]\>

***

### keepAlive()

> **keepAlive**(): `this`

Defined in: [index.ts:94](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L94)

Keeps the pool alive even when empty (prevents termination).

#### Returns

`this`

***

### results()

> **results**(): `AsyncGenerator`\<`T`\>

Defined in: [index.ts:142](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L142)

Returns an async generator yielding results as they complete.

#### Returns

`AsyncGenerator`\<`T`\>

#### Yields

***

### safeAll()

> **safeAll**(): `Promise`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>[]\>

Defined in: [index.ts:182](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L182)

Waits for all tasks to complete and returns their results as an array in safe mode. Promise throws will be returned instead of failing the stream.

#### Returns

`Promise`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>[]\>

A promise that resolves to an array of SafeResult<T>.

***

### safeResults()

> **safeResults**(): `AsyncGenerator`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>\>

Defined in: [index.ts:155](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L155)

Returns an async generator yielding SafeResult-wrapped results as they complete.
Enables safe mode, ensuring results are wrapped in SafeResult<T>.

#### Returns

`AsyncGenerator`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>\>

#### Yields

The next result wrapped in SafeResult.

***

### terminateWhenEmpty()

> **terminateWhenEmpty**(): `this`

Defined in: [index.ts:85](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L85)

Sets the pool to terminate when empty.

#### Returns

`this`

***

### waitForTermination()

> **waitForTermination**(): `Promise`\<`void`\>

Defined in: [index.ts:196](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L196)

Waits for the pool to terminate (all tasks complete) without returning anything.

#### Returns

`Promise`\<`void`\>

***

### withConcurrency()

> **withConcurrency**(`maxConcurrency`): `this`

Defined in: [index.ts:104](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L104)

Sets the maximum concurrency for the pool.

#### Parameters

##### maxConcurrency

`number`

Maximum number of concurrent tasks. 0 means pause, <0 means unlimited.

#### Returns

`this`

***

### withRetries()

> **withRetries**(`maxRetries`): `this`

Defined in: [index.ts:114](https://github.com/aherve/async-queue/blob/13b0f4038b5b5d5d2b0d71216cd50d4eed05bb90/src/index.ts#L114)

Sets the maximum number of retries for tasks.

#### Parameters

##### maxRetries

`number`

Maximum number of retries.

#### Returns

`this`
