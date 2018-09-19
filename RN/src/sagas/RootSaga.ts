import { all } from 'redux-saga/effects';
import { loadGuardWatcherSaga } from './guard/LoadGuardSaga.ts';
import { saveGuardWatcherSaga } from './guard/SaveGuardSaga';

export function* rootSaga(): any {
  yield all([
    loadGuardWatcherSaga(),
    saveGuardWatcherSaga()
  ]);
}
