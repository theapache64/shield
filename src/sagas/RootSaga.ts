import { all } from 'redux-saga/effects';
import { saveGuardWatcherSaga, loadGuardWatcherSaga, clearGuardWatcherSaga } from './GuardSaga';

export function* rootSaga(): any {
  yield all([
    saveGuardWatcherSaga(),
    loadGuardWatcherSaga(),
    clearGuardWatcherSaga()
  ]);
}
