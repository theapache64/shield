import { takeLatest, call, put } from 'redux-saga/effects';
import * as Keychain from 'react-native-keychain';
import { Guard } from '../../api/responses/LogInResponse';
import { BaseAction } from '../../guerilla/models/BaseAction';
import { GuardAction } from '../../reducers/GuardReducer';

const SAVE_GUARD = 'SAVE_GUARD';
export const SAVE_GUARD_REQUEST = `${SAVE_GUARD}_REQUEST`;
export const SAVE_GUARD_SUCCESS = `${SAVE_GUARD}_SUCCESS`;
export const SAVE_GUARD_FAILURE = `${SAVE_GUARD}_FAILURE`;

export function* saveGuardWatcherSaga(): any {
  yield takeLatest(SAVE_GUARD_REQUEST, saveGuardWorkerSaga);
}

function* saveGuardWorkerSaga(action: BaseAction<GuardAction>): any {
  yield call(saveGuard, action.payload.guard);
}

function* saveGuard(guard: Guard): any {

  try {
    yield Keychain.setInternetCredentials(
      Guard.KEY,
      Guard.KEY,
      JSON.stringify(guard)
    );

    yield put({
      type: SAVE_GUARD_SUCCESS,
      payload: { guard }
    });
  } catch (error) {
    yield put({ error, type: SAVE_GUARD_FAILURE });
  }
}
