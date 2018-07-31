import { BaseAction } from '../guerilla/models/BaseAction';
import { Guard } from '../api/responses/LogInResponse';

const LOAD_GUARD = 'LOAD_GUARD';
export const LOAD_GUARD_REQUEST = `${LOAD_GUARD}_REQUEST`;
export const LOAD_GUARD_SUCCESS = `${LOAD_GUARD}_SUCCESS`;
export const LOAD_GUARD_FAILURE = `${LOAD_GUARD}_FAILURE`;

const SAVE_GUARD = 'SAVE_GUARD';
export const SAVE_GUARD_REQUEST = `${SAVE_GUARD}_REQUEST`;
export const SAVE_GUARD_SUCCESS = `${SAVE_GUARD}_SUCCESS`;
export const SAVE_GUARD_FAILURE = `${SAVE_GUARD}_FAILURE`;

export interface GuardReducer {
  isLoaded: boolean;
  guard: Guard;
  error: string;
}

export interface GuardAction {
  guard: Guard;
}

const initialState: GuardReducer = {
  isLoaded: false,
  guard: null,
  error: null
};
export const guardReducer
  = (state: GuardReducer = initialState, action: BaseAction<GuardAction>): GuardReducer => {
    switch (action.type) {

      case LOAD_GUARD_SUCCESS:
        return {
          ...state,
          error: null,
          isLoaded: true,
          guard: action.payload.guard
        };

      case LOAD_GUARD_FAILURE:
        return {
          error: null,
          isLoaded: true,
          guard: null
        };

      case SAVE_GUARD_SUCCESS:
        return {
          ...state,
          error: null,
          guard: action.payload.guard
        };

      case SAVE_GUARD_FAILURE:
        return {
          ...state,
          guard: null,
          error: 'Failed to save guard'
        };


      default:
        return state;
    }
  };
