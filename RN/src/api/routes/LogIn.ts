import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { LogInResponse } from '../responses/LogInResponse';
import { BaseAction } from '../../guerilla/utils/api/BaseAction';
import { ResponseManager } from '../../guerilla/utils/api/ResponseManager';
import { AxiosRequest, AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';

// Keyword
const LOGIN = 'LOGIN';

export const loginReducer =
	(state: NetworkResponse<LogInResponse>, action: BaseAction) =>
		ResponseManager.manage(LOGIN, state, action);

// Params
export class Params {
  constructor(
		public readonly username: string,
		public readonly password: string,
	) { }
}

// Action 
export const login = (
	params: Params
): AxiosRequestType => AxiosRequest.build(
	LOGIN,
	'POST',
	'/login',
	params
);
