import { BaseAction } from '../guerillas/models/BaseAction';
import { Guard } from '../api/responses/LogInResponse';

const SAVE_GUARD = 'SAVE_GUARD';
export const SAVE_GUARD_REQUEST = `${SAVE_GUARD}_REQUEST`;
export const SAVE_GUARD_SUCCESS = `${SAVE_GUARD}_SUCCESS`;
export const SAVE_GUARD_FAILURE = `${SAVE_GUARD}_FAILURE`;

interface State {
  guard: Guard;
}

interface GuardAction {
  guard: Guard;
}

const initialState: State = {
  guard: null
};
export const guardReducer
  = (state: State = initialState, action: BaseAction<GuardAction>): State => {
    switch (action.type) {

      case SAVE_GUARD_SUCCESS:
        return {
          ...state,
          guard: action.payload.guard
        };

      default:
        return state;
    }
  };
