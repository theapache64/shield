import { takeLatest, put } from 'redux-saga/effects';

const CLEAR_GUARD = 'CLEAR_GUARD';
export const CLEAR_GUARD_REQUEST = `${CLEAR_GUARD}_REQUEST`;
export const CLEAR_GUARD_SUCCESS = `${CLEAR_GUARD}_SUCCESS`;

export function* clearGuardWatcherSaga(): any {
  yield takeLatest(CLEAR_GUARD_REQUEST, clearGuardWorkerSaga);
}

function* clearGuardWorkerSaga(): any {
  yield put({ type: CLEAR_GUARD_SUCCESS });
}
