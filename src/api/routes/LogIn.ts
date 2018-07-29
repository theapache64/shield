import { NetworkResponse } from '../../guerillas/utils/api/NetworkResponse';
import { LogInResponse } from '../responses/LogInResponse';
import { BaseAction } from '../../guerillas/utils/api/BaseAction';
import { ResponseManager } from '../../guerillas/utils/api/ResponseManager';
import { AxiosRequest } from '../../guerillas/utils/api/AxiosRequest';

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
): AxiosRequest => new AxiosRequest(
	LOGIN,
	'POST',
	'/logingh',
	params
);
