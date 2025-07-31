[**@aherve/async-pool v1.0.1**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPool

# Class: AsyncPool\<T\>

Defined in: [index.ts:54](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L54)

An asynchronous pool that manages concurrent execution of tasks with retry and termination options.

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new AsyncPool**\<`T`\>(`opts?`): `AsyncPool`\<`T`\>

Defined in: [index.ts:72](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L72)

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

Defined in: [index.ts:59](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L59)

The options for this pool instance.

## Methods

### add()

> **add**(`task`): `this`

Defined in: [index.ts:126](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L126)

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

Defined in: [index.ts:171](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L171)

Waits for all tasks to complete and returns their results as an array.

#### Returns

`Promise`\<`T`[]\>

***

### keepAlive()

> **keepAlive**(): `this`

Defined in: [index.ts:96](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L96)

Keeps the pool alive even when empty (prevents termination).

#### Returns

`this`

***

### results()

> **results**(): `AsyncGenerator`\<`T`\>

Defined in: [index.ts:146](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L146)

Returns an async generator yielding results as they complete.

#### Returns

`AsyncGenerator`\<`T`\>

#### Yields

***

### safeAll()

> **safeAll**(): `Promise`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>[]\>

Defined in: [index.ts:186](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L186)

Waits for all tasks to complete and returns their results as an array in safe mode. Promise throws will be returned instead of failing the stream.

#### Returns

`Promise`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>[]\>

A promise that resolves to an array of SafeResult<T>.

***

### safeResults()

> **safeResults**(): `AsyncGenerator`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>\>

Defined in: [index.ts:159](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L159)

Returns an async generator yielding SafeResult-wrapped results as they complete.
Enables safe mode, ensuring results are wrapped in SafeResult<T>.

#### Returns

`AsyncGenerator`\<[`SafeResult`](../type-aliases/SafeResult.md)\<`T`\>\>

#### Yields

The next result wrapped in SafeResult.

***

### terminateWhenEmpty()

> **terminateWhenEmpty**(): `this`

Defined in: [index.ts:87](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L87)

Sets the pool to terminate when empty.

#### Returns

`this`

***

### waitForTermination()

> **waitForTermination**(): `Promise`\<`void`\>

Defined in: [index.ts:200](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L200)

Waits for the pool to terminate (all tasks complete) without returning anything.

#### Returns

`Promise`\<`void`\>

***

### withConcurrency()

> **withConcurrency**(`maxConcurrency`): `this`

Defined in: [index.ts:106](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L106)

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

Defined in: [index.ts:116](https://github.com/aherve/async-queue/blob/aef3448197196fe4d71c4d1c2021b342f7c2e5ab/src/index.ts#L116)

Sets the maximum number of retries for tasks.

#### Parameters

##### maxRetries

`number`

Maximum number of retries.

#### Returns

`this`
