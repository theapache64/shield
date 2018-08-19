import { NetworkResponse } from './NetworkResponse';
import { BaseAction } from './BaseAction';

const initialState: NetworkResponse<any> = {
  isLoading: false,
  errorMessage: null,
  successMessage: '',
  isSuccess: false,
  response: null,
};

export class ResponseManager {

  static getErrorResponse
    = (state: NetworkResponse<any>): NetworkResponse<any> => (
      {
        ...state,
        isLoading: false,
        isSuccess: false,
        successMessage: '',
        response: null,
        errorMessage: 'Some network error occurred',
      }
    )

  static getSuccessResponse
    = <T>(state: NetworkResponse<T>, action: BaseAction): NetworkResponse<T> => {

      if (action.payload) {

        if (!action.payload.data.error) {

          // Success
          return {
            ...state,

            isLoading: false,
            errorMessage: null,
            response: action.payload.data,
            successMessage: action.payload.data.message,
            isSuccess: true,
          };
        }

        // Server error
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          successMessage: '',
          response: null,
          errorMessage: action.payload.data.message,
        };

      }

      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        successMessage: '',
        response: null,
        errorMessage: 'Something went terribly wrong! :/',
      };
    }

  static manage
    = <T>(normalActionType: string, state: NetworkResponse<T> = initialState, action: BaseAction)
      : NetworkResponse<T> => {

      switch (action.type) {
        case normalActionType:

          return {
            ...state,
            isLoading: true,
            errorMessage: null,
            successMessage: '',
            isSuccess: false,
          };

        case `${normalActionType}_SUCCESS`:

          return ResponseManager.getSuccessResponse<T>(state, action);

        case `${normalActionType}_FAIL`:
          return ResponseManager.getErrorResponse(state);

        default:
          return state;
      }
    }
}
