import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { LoadHomeResponse } from '../responses/LoadHomeResponse';
import { BaseAction } from '../../guerilla/models/BaseAction';
import { ResponseManager } from '../../guerilla/utils/api/ResponseManager';
import { AxiosRequest, AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';

// Keyword
const LOAD_HOME = 'LOAD_HOME';

export const loadHomeReducer =
  (state: NetworkResponse<LoadHomeResponse>, action: BaseAction) =>
    ResponseManager.manage(LOAD_HOME, state, action);

// Params
export class Params {
  constructor(
  ) { }
}

// Action 
export const loadHome = (apiKey: string): AxiosRequestType => AxiosRequest.build(
  LOAD_HOME,
  'GET',
  '/load_home',
  {},
  apiKey
);
