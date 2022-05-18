import { all } from 'redux-saga/effects';

// App Sagas
import appSaga from './app/saga';

export default function* rootSaga() {
  yield all([appSaga()]);
}
