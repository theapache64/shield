import * as Keychain from 'react-native-keychain';
import { call, put, takeLatest } from 'redux-saga/effects';

import { Guard } from '../api/responses/LogInResponse';
import { BaseAction } from '../guerilla/models/BaseAction';
import {
  GuardAction, LOAD_GUARD_FAILURE, LOAD_GUARD_REQUEST, SAVE_GUARD_FAILURE, SAVE_GUARD_REQUEST,
  SAVE_GUARD_SUCCESS,
  LOAD_GUARD_SUCCESS
} from '../reducers/GuardReducer';

export function* saveGuardWatcherSaga() {
  yield takeLatest(SAVE_GUARD_REQUEST, saveGuardWorkerSaga);
}

function* saveGuardWorkerSaga(action?: BaseAction<GuardAction>) {
  yield call(saveGuard, action.payload.guard);
}

function* saveGuard(guard: Guard) {

  try {

    yield Keychain.setInternetCredentials(
      Guard.KEY,
      Guard.KEY,
      JSON.stringify(guard)
    );

    yield put({ type: SAVE_GUARD_SUCCESS, payload: { guard } });

  } catch (error) {
    yield put({ type: SAVE_GUARD_FAILURE });
  }
}

export function* loadGuardWatcherSaga() {
  console.log('loadGuardWatcherSaga registered');

  yield takeLatest(LOAD_GUARD_REQUEST, loadGuardWorkerSaga);
}

export function* loadGuardWorkerSaga() {
  console.log('loadGuardWorkerSaga registered');

  yield call(loadGuard);
}

function* loadGuard() {
  try {
    const result = yield Keychain.getInternetCredentials(Guard.KEY);
    if (result) {
      yield put({ type: LOAD_GUARD_SUCCESS, payload: { guard: result.password } });
    } else {
      yield put({ type: LOAD_GUARD_FAILURE });
    }
  } catch (error) {
    console.log('Error loading guard ', error);
    yield put({ type: LOAD_GUARD_FAILURE, });
  }
}
