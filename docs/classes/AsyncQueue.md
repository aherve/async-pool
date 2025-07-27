[**@aherve/async-queue v0.0.10**](../README.md)

***

[@aherve/async-queue](../README.md) / AsyncQueue

# Class: AsyncQueue\<T\>

Defined in: [src/async-queue.ts:45](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L45)

An asynchronous queue that manages concurrent execution of tasks with retry and termination options.
Extends Node.js Readable stream in object mode.

## Extends

- `Readable`

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new AsyncQueue**\<`T`\>(`opts?`): `AsyncQueue`\<`T`\>

Defined in: [src/async-queue.ts:60](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L60)

Creates an instance of AsyncQueue.

#### Parameters

##### opts?

`Partial`\<[`AsyncQueueOptions`](../interfaces/AsyncQueueOptions.md)\>

Optional configuration options to override the default AsyncQueue options.

#### Returns

`AsyncQueue`\<`T`\>

#### Overrides

`Readable.constructor`

## Properties

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:157

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Inherited from

`Readable.closed`

***

### destroyed

> **destroyed**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:152

Is `true` after `readable.destroy()` has been called.

#### Since

v8.0.0

#### Inherited from

`Readable.destroyed`

***

### errored

> `readonly` **errored**: `null` \| `Error`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:162

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

`Readable.errored`

***

### options

> **options**: [`AsyncQueueOptions`](../interfaces/AsyncQueueOptions.md)

Defined in: [src/async-queue.ts:50](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L50)

The options for this queue instance.

***

### readable

> **readable**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:109

Is `true` if it is safe to call [read](#read), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Since

v11.4.0

#### Inherited from

`Readable.readable`

***

### readableAborted

> `readonly` **readableAborted**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:103

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Since

v16.8.0

#### Inherited from

`Readable.readableAborted`

***

### readableDidRead

> `readonly` **readableDidRead**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:114

Returns whether `'data'` has been emitted.

#### Since

v16.7.0, v14.18.0

#### Inherited from

`Readable.readableDidRead`

***

### readableEncoding

> `readonly` **readableEncoding**: `null` \| `BufferEncoding`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:119

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](#setencoding) method.

#### Since

v12.7.0

#### Inherited from

`Readable.readableEncoding`

***

### readableEnded

> `readonly` **readableEnded**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:124

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v24.x/api/stream.html#event-end) event is emitted.

#### Since

v12.9.0

#### Inherited from

`Readable.readableEnded`

***

### readableFlowing

> `readonly` **readableFlowing**: `null` \| `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:130

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v24.x/api/stream.html#three-states) section.

#### Since

v9.4.0

#### Inherited from

`Readable.readableFlowing`

***

### readableHighWaterMark

> `readonly` **readableHighWaterMark**: `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:135

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Since

v9.3.0

#### Inherited from

`Readable.readableHighWaterMark`

***

### readableLength

> `readonly` **readableLength**: `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:142

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Inherited from

`Readable.readableLength`

***

### readableObjectMode

> `readonly` **readableObjectMode**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:147

Getter for the property `objectMode` of a given `Readable` stream.

#### Since

v12.3.0

#### Inherited from

`Readable.readableObjectMode`

***

### captureRejections

> `static` **captureRejections**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:458

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`Readable.captureRejections`

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](#capturerejectionsymbol)

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:451

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`Readable.captureRejectionSymbol`

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:497

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_ `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

#### Since

v0.11.2

#### Inherited from

`Readable.defaultMaxListeners`

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](#errormonitor)

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:444

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Inherited from

`Readable.errorMonitor`

## Methods

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:164

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Readable._construct`

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:605

#### Parameters

##### error

`null` | `Error`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Readable._destroy`

***

### \_read()

> **\_read**(): `void`

Defined in: [src/async-queue.ts:153](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L153)

#### Returns

`void`

#### Overrides

`Readable._read`

***

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:690

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Since

v20.4.0

#### Inherited from

`Readable.[asyncDispose]`

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`any`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:685

#### Returns

`AsyncIterator`\<`any`\>

#### Inherited from

`Readable.[asyncIterator]`

***

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:136

#### Type Parameters

##### K

`K`

#### Parameters

##### error

`Error`

##### event

`string` | `symbol`

##### args

...`AnyRest`

#### Returns

`void`

#### Inherited from

`Readable.[captureRejectionSymbol]`

***

### addListener()

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:629

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:630

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:631

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:632

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:633

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:634

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:635

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:636

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.addListener`

***

### all()

> **all**(): `Promise`\<`T`[]\>

Defined in: [src/async-queue.ts:134](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L134)

Waits for all tasks to complete and returns their results as an array.

#### Returns

`Promise`\<`T`[]\>

***

### asIndexedPairs()

> **asIndexedPairs**(`options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:580

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream of indexed pairs.

#### Since

v17.5.0

#### Inherited from

`Readable.asIndexedPairs`

***

### compose()

> **compose**\<`T`\>(`stream`, `options?`): `T`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:35

#### Type Parameters

##### T

`T` *extends* `ReadableStream`

#### Parameters

##### stream

`T` | `ComposeFnParam` | `Iterable`\<`T`, `any`, `any`\> | `AsyncIterable`\<`T`, `any`, `any`\>

##### options?

###### signal

`AbortSignal`

#### Returns

`T`

#### Inherited from

`Readable.compose`

***

### destroy()

> **destroy**(`error?`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:617

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

##### error?

`Error`

Error which will be passed as payload in `'error'` event

#### Returns

`this`

#### Since

v8.0.0

#### Inherited from

`Readable.destroy`

***

### drop()

> **drop**(`limit`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:566

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

##### limit

`number`

the number of chunks to drop from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

#### Since

v17.5.0

#### Inherited from

`Readable.drop`

***

### emit()

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:637

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

###### event

`"close"`

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`, `chunk`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:638

##### Parameters

###### event

`"data"`

###### chunk

`any`

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:639

##### Parameters

###### event

`"end"`

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`, `err`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:640

##### Parameters

###### event

`"error"`

###### err

`Error`

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:641

##### Parameters

###### event

`"pause"`

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:642

##### Parameters

###### event

`"readable"`

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:643

##### Parameters

###### event

`"resume"`

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:644

##### Parameters

###### event

`string` | `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

`Readable.emit`

***

### enqueue()

> **enqueue**(`task`): `this`

Defined in: [src/async-queue.ts:108](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L108)

Enqueues a new task into the queue.

#### Parameters

##### task

`Omit`\<[`AsyncQueueTask`](../interfaces/AsyncQueueTask.md)\<`T`\>, `"maxRetries"`\> & `object`

The task to enqueue.

#### Returns

`this`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:921

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

`Readable.eventNames`

***

### every()

> **every**(`fn`, `options?`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:545

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Since

v17.5.0

#### Inherited from

`Readable.every`

***

### filter()

> **filter**(`fn`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:473

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to filter chunks from the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream filtered with the predicate *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`Readable.filter`

***

### find()

#### Call Signature

> **find**\<`T`\>(`fn`, `options?`): `Promise`\<`undefined` \| `T`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:528

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type Parameters

###### T

`T`

##### Parameters

###### fn

(`data`, `options?`) => `data is T`

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`Readable.find`

#### Call Signature

> **find**(`fn`, `options?`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:532

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Parameters

###### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### Returns

`Promise`\<`any`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`Readable.find`

***

### flatMap()

> **flatMap**(`fn`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:559

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

##### fn

(`data`, `options?`) => `any`

a function to map over every chunk in the stream. May be async. May be a stream or generator.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

#### Since

v17.5.0

#### Inherited from

`Readable.flatMap`

***

### forEach()

> **forEach**(`fn`, `options?`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:492

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

##### fn

(`data`, `options?`) => `void` \| `Promise`\<`void`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

#### Since

v17.5.0

#### Inherited from

`Readable.forEach`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:773

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [EventEmitter.defaultMaxListeners](#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`Readable.getMaxListeners`

***

### isPaused()

> **isPaused**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:326

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Since

v0.11.14

#### Inherited from

`Readable.isPaused`

***

### iterator()

> **iterator**(`options?`): `AsyncIterator`\<`any`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:456

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

##### options?

###### destroyOnReturn?

`boolean`

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

#### Returns

`AsyncIterator`\<`any`\>

#### Since

v16.3.0

#### Inherited from

`Readable.iterator`

***

### keepAlive()

> **keepAlive**(): `this`

Defined in: [src/async-queue.ts:78](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L78)

Keeps the queue alive even when empty (prevents termination).

#### Returns

`this`

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener?`): `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:867

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

The name of the event being listened for

`string` | `symbol`

##### listener?

`Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

`Readable.listenerCount`

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:786

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

`Readable.listeners`

***

### map()

> **map**(`fn`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:464

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

##### fn

(`data`, `options?`) => `any`

a function to map over every chunk in the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream mapped with the function *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`Readable.map`

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:746

Alias for `emitter.removeListener()`.

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` | `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

`Readable.off`

***

### on()

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:645

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:646

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:647

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:648

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:649

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:650

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:651

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:652

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.on`

***

### once()

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:653

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:654

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:655

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:656

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:657

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:658

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:659

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:660

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.once`

***

### pause()

> **pause**(): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:290

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Readable.pause`

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options?`): `T`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:29

#### Type Parameters

##### T

`T` *extends* `WritableStream`

#### Parameters

##### destination

`T`

##### options?

###### end?

`boolean`

#### Returns

`T`

#### Inherited from

`Readable.pipe`

***

### prependListener()

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:661

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:662

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:663

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:664

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:665

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:666

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:667

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:668

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependListener`

***

### prependOnceListener()

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:669

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:670

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:671

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:672

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:673

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:674

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:675

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:676

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.prependOnceListener`

***

### push()

> **push**(`chunk`, `encoding?`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:446

#### Parameters

##### chunk

`any`

##### encoding?

`BufferEncoding`

#### Returns

`boolean`

#### Inherited from

`Readable.push`

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:817

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

`Readable.rawListeners`

***

### read()

> **read**(`size?`): `any`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:243

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

##### size?

`number`

Optional argument to specify how much data to read.

#### Returns

`any`

#### Since

v0.9.4

#### Inherited from

`Readable.read`

***

### reduce()

#### Call Signature

> **reduce**\<`T`\>(`fn`, `initial?`, `options?`): `Promise`\<`T`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:595

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### fn

(`previous`, `data`, `options?`) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial?

`undefined`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`Readable.reduce`

#### Call Signature

> **reduce**\<`T`\>(`fn`, `initial`, `options?`): `Promise`\<`T`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:600

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### fn

(`previous`, `data`, `options?`) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial

`T`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`Readable.reduce`

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:757

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### eventName?

`string` | `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`Readable.removeAllListeners`

***

### removeListener()

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:677

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:678

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:679

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:680

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:681

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:682

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:683

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:684

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Readable.removeListener`

***

### results()

> **results**(): `AsyncGenerator`\<`T`\>

Defined in: [src/async-queue.ts:123](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L123)

Returns an async generator yielding results as they complete.

#### Returns

`AsyncGenerator`\<`T`\>

#### Yields

***

### resume()

> **resume**(): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:309

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Readable.resume`

***

### setEncoding()

> **setEncoding**(`encoding`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:268

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as `Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer` objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling `readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

##### encoding

`BufferEncoding`

The encoding to use.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Readable.setEncoding`

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:767

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### n

`number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

`Readable.setMaxListeners`

***

### some()

> **some**(`fn`, `options?`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:514

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Since

v17.5.0

#### Inherited from

`Readable.some`

***

### take()

> **take**(`limit`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:573

This method returns a new stream with the first *limit* chunks.

#### Parameters

##### limit

`number`

the number of chunks to take from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks taken.

#### Since

v17.5.0

#### Inherited from

`Readable.take`

***

### terminateWhenEmpty()

> **terminateWhenEmpty**(): `this`

Defined in: [src/async-queue.ts:69](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L69)

Sets the queue to terminate when empty.

#### Returns

`this`

***

### toArray()

> **toArray**(`options?`): `Promise`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:504

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### Since

v17.5.0

#### Inherited from

`Readable.toArray`

***

### unpipe()

> **unpipe**(`destination?`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:353

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

##### destination?

`WritableStream`

Optional specific stream to unpipe

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Readable.unpipe`

***

### unshift()

> **unshift**(`chunk`, `encoding?`): `void`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:419

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

##### chunk

`any`

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a {string}, {Buffer}, {TypedArray}, {DataView} or `null`. For object mode streams, `chunk` may be any JavaScript value.

##### encoding?

`BufferEncoding`

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

#### Returns

`void`

#### Since

v0.9.11

#### Inherited from

`Readable.unshift`

***

### waitForTermination()

> **waitForTermination**(): `Promise`\<`void`\>

Defined in: [src/async-queue.ts:147](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L147)

Waits for the queue to terminate (all tasks complete and queue is empty).

#### Returns

`Promise`\<`void`\>

***

### withConcurrency()

> **withConcurrency**(`maxConcurrency`): `this`

Defined in: [src/async-queue.ts:88](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L88)

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

Defined in: [src/async-queue.ts:98](https://github.com/aherve/async-queue/blob/b0f165cae77850c64c9d22d5e974ce07ac1b1721/src/async-queue.ts#L98)

Sets the maximum number of retries for tasks.

#### Parameters

##### maxRetries

`number`

Maximum number of retries.

#### Returns

`this`

***

### wrap()

> **wrap**(`stream`): `this`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:445

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

##### stream

`ReadableStream`

An "old style" readable stream

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Readable.wrap`

***

### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:436

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

##### signal

`AbortSignal`

##### resource

(`event`) => `void`

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Since

v20.5.0

#### Inherited from

`Readable.addAbortListener`

***

### from()

> `static` **from**(`iterable`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:75

A utility method for creating Readable Streams out of iterators.

#### Parameters

##### iterable

Object implementing the `Symbol.asyncIterator` or `Symbol.iterator` iterable protocol. Emits an 'error' event if a null value is passed.

`Iterable`\<`any`, `any`, `any`\> | `AsyncIterable`\<`any`, `any`, `any`\>

##### options?

`ReadableOptions`\<`Readable`\>

Options provided to `new stream.Readable([options])`. By default, `Readable.from()` will set `options.objectMode` to `true`, unless this is explicitly opted out by setting `options.objectMode` to `false`.

#### Returns

`Readable`

#### Since

v12.3.0, v10.17.0

#### Inherited from

`Readable.from`

***

### fromWeb()

> `static` **fromWeb**(`readableStream`, `options?`): `Readable`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:80

A utility method for creating a `Readable` from a web `ReadableStream`.

#### Parameters

##### readableStream

`ReadableStream`

##### options?

`Pick`\<`ReadableOptions`\<`Readable`\>, `"objectMode"` \| `"encoding"` \| `"highWaterMark"` \| `"signal"`\>

#### Returns

`Readable`

#### Since

v17.0.0

#### Inherited from

`Readable.fromWeb`

***

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:358

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

##### emitter

`EventEmitter`\<`DefaultEventMap`\> | `EventTarget`

##### name

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v15.2.0, v14.17.0

#### Inherited from

`Readable.getEventListeners`

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:387

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

##### emitter

`EventEmitter`\<`DefaultEventMap`\> | `EventTarget`

#### Returns

`number`

#### Since

v19.9.0

#### Inherited from

`Readable.getMaxListeners`

***

### isDisturbed()

> `static` **isDisturbed**(`stream`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:98

Returns whether the stream has been read from or cancelled.

#### Parameters

##### stream

`Readable` | `ReadableStream`

#### Returns

`boolean`

#### Since

v16.8.0

#### Inherited from

`Readable.isDisturbed`

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:330

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

##### emitter

`EventEmitter`

The emitter to query

##### eventName

The event name

`string` | `symbol`

#### Returns

`number`

#### Since

v0.9.12

#### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

`Readable.listenerCount`

***

### on()

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:303

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

###### emitter

`EventEmitter`

###### eventName

`string` | `symbol`

###### options?

`StaticEventEmitterIteratorOptions`

##### Returns

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

`Readable.on`

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:308

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterIteratorOptions`

##### Returns

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

`Readable.on`

***

### once()

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:217

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

###### emitter

`EventEmitter`

###### eventName

`string` | `symbol`

###### options?

`StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

`Readable.once`

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:222

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

`Readable.once`

***

### setMaxListeners()

> `static` **setMaxListeners**(`n?`, ...`eventTargets?`): `void`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/events.d.ts:402

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

##### n?

`number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

##### eventTargets?

...(`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`)[]

Zero or more {EventTarget} or {EventEmitter} instances. If none are specified, `n` is set as the default max for all newly created {EventTarget} and {EventEmitter}
objects.

#### Returns

`void`

#### Since

v15.4.0

#### Inherited from

`Readable.setMaxListeners`

***

### toWeb()

> `static` **toWeb**(`streamReadable`, `options?`): `ReadableStream`

Defined in: node\_modules/.pnpm/@types+node@24.1.0/node\_modules/@types/node/stream.d.ts:88

A utility method for creating a web `ReadableStream` from a `Readable`.

#### Parameters

##### streamReadable

`Readable`

##### options?

###### strategy?

`QueuingStrategy`\<`any`\>

#### Returns

`ReadableStream`

#### Since

v17.0.0

#### Inherited from

`Readable.toWeb`
