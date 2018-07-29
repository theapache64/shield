import { all } from 'redux-saga/effects';
import { addGuardWatcherSaga } from './GuardSaga';

export function* rootSaga() {
  yield all([
    addGuardWatcherSaga()
  ]);
}
