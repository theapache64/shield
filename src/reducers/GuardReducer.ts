import { BaseAction } from '../guerilla/utils/api/BaseAction';
import { LOAD_GUARD_SUCCESS, LOAD_GUARD_FAILURE } from '../sagas/GuardSaga';
import { Guard } from '../api/responses/LogInResponse';

export interface GuardReducer {
  guard: Guard;
  error: string;
}

const iState: GuardReducer = {
  guard: null,
  error: null
};

export const guardReducer = (state: GuardReducer = iState, action: BaseAction): GuardReducer => {
  switch (action.type) {

    case LOAD_GUARD_SUCCESS:
      return {
        ...state,
        guard: action.payload.guard,
        error: null
      };

    case LOAD_GUARD_FAILURE:
      return {
        ...state,
        guard: null,
        error: action.payload.error
      };
    default:
      return state;
  }
};
