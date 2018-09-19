
import { LOAD_GUARD_SUCCESS, LOAD_GUARD_FAILURE } from '../sagas/guard/LoadGuardSaga.ts';
import { Guard } from '../api/responses/LogInResponse';
import { CLEAR_GUARD_SUCCESS } from '../sagas/guard/ClearGuardSaga';
import { BaseAction } from '../guerilla/models/BaseAction';
import { SAVE_GUARD_SUCCESS, SAVE_GUARD_FAILURE } from '../sagas/guard/SaveGuardSaga';

export interface GuardReducer {
  guard: Guard;
  error: string;
}

export interface GuardAction {
  guard: Guard;
}

const iState: GuardReducer = {
  // guard: null, TODO: Production - UTLACBL
  guard: {
    name: 'TheName',
    apiKey: 'theApiKey'
  },
  error: null
};

export const guardReducer = (state: GuardReducer = iState, action: BaseAction<GuardAction>)
  : GuardReducer => {
  switch (action.type) {

    case SAVE_GUARD_SUCCESS:
    case LOAD_GUARD_SUCCESS:
      return {
        ...state,
        guard: action.payload.guard,
        error: null
      };

    case SAVE_GUARD_FAILURE:
    case LOAD_GUARD_FAILURE:
      return {
        ...state,
        guard: null,
        error: action.error
      };

    case CLEAR_GUARD_SUCCESS:
      return {
        ...state,
        guard: null,
        error: null
      };

    default:
      return state;
  }
};
