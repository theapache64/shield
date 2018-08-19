import { all } from 'redux-saga/effects';
import { loadGuardWatcherSaga } from './GuardSaga';

export function* rootSaga(): any {
  yield all([
    loadGuardWatcherSaga()
  ]);
}
