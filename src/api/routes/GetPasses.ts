import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { GetPassesResponse } from '../responses/GetPassesResponse';
import { BaseAction } from '../../guerilla/utils/api/BaseAction';
import { ResponseManager } from '../../guerilla/utils/api/ResponseManager';
import { AxiosRequest, AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';

// Keyword
const GET_PASSES = 'GET_PASSES';

export const getPassesReducer =
  (state: NetworkResponse<GetPassesResponse>, action: BaseAction) =>
    ResponseManager.manage(GET_PASSES, state, action);

// Params
export class Params {
  constructor(
    public readonly pass_no?: string,
  ) { }
}

// Action 
export const getPasses = (
  authorisation: string,
  params: Params
): AxiosRequestType => AxiosRequest.build(
  GET_PASSES,
  'GET',
  '/get_passes',
  params
);
