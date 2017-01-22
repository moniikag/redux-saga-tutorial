import test from 'tape'

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  decrementAsync,
  incrementAsync,
} from './sagas'

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must be done'
  )

  assert.end()
})

test('decrementAsync Saga test', (assert) => {
  const gen = decrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'decrementAsync Saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'DECREMENT', payload: { val: 2 }}),
    'decrementAsync Saga must be done'
  )

  assert.end()
})
