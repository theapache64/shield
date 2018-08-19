import { call, takeLatest, put } from 'redux-saga/effects';
import * as Keychain from 'react-native-keychain';
import { Guard } from '../../api/responses/LogInResponse';

const LOAD_GUARD = 'LOAD_GUARD';
export const LOAD_GUARD_REQUEST = `${LOAD_GUARD}_REQUEST`;
export const LOAD_GUARD_SUCCESS = `${LOAD_GUARD}_SUCCESS`;
export const LOAD_GUARD_FAILURE = `${LOAD_GUARD}_FAILURE`;

// Watcher saga
export function* loadGuardWatcherSaga(): any {
  yield takeLatest(LOAD_GUARD_REQUEST, loadGuardWorkerSaga);
}

// Worker saga
function* loadGuardWorkerSaga(): any {
  yield call(loadGuard);
}

function* loadGuard(): any {
  try {
    const result: Keychain.UserCredentials = yield Keychain.getInternetCredentials(Guard.KEY);
    if (result) {
      yield put({
        type: LOAD_GUARD_SUCCESS,
        error: null,
        payload: {
          guard: JSON.parse(result.password)
        }
      });
    } else {
      yield put({
        type: LOAD_GUARD_FAILURE,
        error: 'No guard logged in'
      });
    }
  } catch (error) {
    yield put({
      error,
      type: LOAD_GUARD_FAILURE,
    });
  }
}
