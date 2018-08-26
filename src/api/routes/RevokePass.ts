import { AxiosRequest } from '../../guerilla/utils/api/AxiosRequest';
import { BaseAction } from '../../guerilla/utils/api/BaseAction';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { ResponseManager } from '../../guerilla/utils/api/ResponseManager';
import { RevokePassResponse } from '../responses/RevokePassResponse';

// Keyword
const REVOKE_PASS = 'REVOKE_PASS';

export const revokePassReducer =
  (state: NetworkResponse<RevokePassResponse>, action: BaseAction) =>
    ResponseManager.manage(REVOKE_PASS, state, action);

// Params
export class Params {
  constructor(
    public readonly pass_id: string,
  ) { }
}

// Action 
export const revokePass = (
  authorization: string,
  params: Params
): AxiosRequest => AxiosRequest.build(
  REVOKE_PASS,
  'PUT',
  '/revoke_pass',
  params,
  authorization
);
