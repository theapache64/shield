import { all } from 'redux-saga/effects';
import { saveGuardWatcherSaga, loadGuardWatcherSaga } from './GuardSaga';

export function* rootSaga() {
  yield all([
    saveGuardWatcherSaga(),
    loadGuardWatcherSaga()
  ]);
}
