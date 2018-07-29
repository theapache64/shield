import { takeLatest } from 'redux-saga/effects';
import { SAVE_GUARD_REQUEST } from '../reducers/GuardReducer';
import { Alert } from 'react-native';

export function* addGuardWatcherSaga() {
  yield takeLatest(SAVE_GUARD_REQUEST, addGuardWorkerSaga);
}

function* addGuardWorkerSaga(action?: any) {
  yield Alert.alert('Worker!!', action.payload.guard.name);
}
