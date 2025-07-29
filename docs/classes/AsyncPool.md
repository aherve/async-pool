[**@aherve/async-pool v1.0.1**](../README.md)

***

[@aherve/async-pool](../globals.md) / AsyncPool

# Class: AsyncPool\<T\>

Defined in: [index.ts:50](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L50)

An asynchronous pool that manages concurrent execution of tasks with retry and termination options.

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new AsyncPool**\<`T`\>(`opts?`): `AsyncPool`\<`T`\>

Defined in: [index.ts:67](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L67)

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

Defined in: [index.ts:55](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L55)

The options for this pool instance.

## Methods

### add()

> **add**(`task`): `this`

Defined in: [index.ts:121](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L121)

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

Defined in: [index.ts:152](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L152)

Waits for all tasks to complete and returns their results as an array.

#### Returns

`Promise`\<`T`[]\>

***

### keepAlive()

> **keepAlive**(): `this`

Defined in: [index.ts:91](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L91)

Keeps the pool alive even when empty (prevents termination).

#### Returns

`this`

***

### results()

> **results**(): `AsyncGenerator`\<`T`\>

Defined in: [index.ts:141](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L141)

Returns an async generator yielding results as they complete.

#### Returns

`AsyncGenerator`\<`T`\>

#### Yields

***

### terminateWhenEmpty()

> **terminateWhenEmpty**(): `this`

Defined in: [index.ts:82](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L82)

Sets the pool to terminate when empty.

#### Returns

`this`

***

### waitForTermination()

> **waitForTermination**(): `Promise`\<`void`\>

Defined in: [index.ts:165](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L165)

Waits for the pool to terminate (all tasks complete) without returning anything.

#### Returns

`Promise`\<`void`\>

***

### withConcurrency()

> **withConcurrency**(`maxConcurrency`): `this`

Defined in: [index.ts:101](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L101)

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

Defined in: [index.ts:111](https://github.com/aherve/async-pool/blob/b08caa9acf35189a12942bf5df7fa0e4ab175914/src/index.ts#L111)

Sets the maximum number of retries for tasks.

#### Parameters

##### maxRetries

`number`

Maximum number of retries.

#### Returns

`this`
