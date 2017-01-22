export function* helloSaga() {
  console.log('Hello Sagas!')
}

import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* decrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'DECREMENT', payload: { val: 2 } })
}

export function* watchAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchAsync()
  ]
}
