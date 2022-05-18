import { put, takeLatest } from 'redux-saga/effects';
import { INITIALIZE, INITIALIZED, START_LOADING, STOP_LOADING } from './action';

function* initialize() {
  yield put({ type: START_LOADING }); // Start loading

  yield put({ type: INITIALIZED });

  yield put({ type: STOP_LOADING }); // Stop loading
}

// Exporting the main saga
export default function* appSaga() {
  yield takeLatest(INITIALIZE, initialize);
}
