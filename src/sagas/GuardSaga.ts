import * as Keychain from 'react-native-keychain';
import { call, put, takeLatest, ForkEffect, CallEffect } from 'redux-saga/effects';

import { Guard } from '../api/responses/LogInResponse';
import { BaseAction } from '../guerilla/models/BaseAction';
import {
  GuardAction, LOAD_GUARD_FAILURE, LOAD_GUARD_REQUEST, SAVE_GUARD_FAILURE, SAVE_GUARD_REQUEST,
  SAVE_GUARD_SUCCESS,
  LOAD_GUARD_SUCCESS,
  CLEAR_GUARD_REQUEST,
  CLEAR_GUARD_SUCCESS,
  CLEAR_GUARD_FAILURE
} from '../reducers/GuardReducer';
import { App } from '../App';

// ################################
// SAVE GUARD
// ################################
export function* saveGuardWatcherSaga(): any {
  yield takeLatest(SAVE_GUARD_REQUEST, saveGuardWorkerSaga);
}

function* saveGuardWorkerSaga(action?: BaseAction<GuardAction>): any {
  yield call(saveGuard, action.payload.guard);
}

function* saveGuard(guard: Guard): any {

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

// ################################
// LOAD GUARD
// ################################

export function* loadGuardWatcherSaga(): any {
  console.log('loadGuardWatcherSaga registered');

  yield takeLatest(LOAD_GUARD_REQUEST, loadGuardWorkerSaga);
}

export function* loadGuardWorkerSaga(): any {
  console.log('loadGuardWorkerSaga registered');

  yield call(loadGuard);
}

function* loadGuard(): any {
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

// ################################
// CLEAR GUARD
// ################################

export function* clearGuardWatcherSaga(): any {
  yield takeLatest(CLEAR_GUARD_REQUEST, clearGuardWorkerSaga);
}

function* clearGuardWorkerSaga(): any {
  yield call(clearGuard);
}

function* clearGuard(): any {
  try {
    const result = yield Keychain.resetInternetCredentials(Guard.KEY);
    if (result) {
      yield put({ type: CLEAR_GUARD_SUCCESS });
    } else {
      yield put({ type: CLEAR_GUARD_FAILURE });
    }
  } catch (error) {
    console.warn('ERROR : ', error);
    yield put({ type: CLEAR_GUARD_FAILURE });
  }
}
