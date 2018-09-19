import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { IssuePassResponse } from '../responses/IssuePassResponse';
import { BaseAction } from '../../guerilla/utils/api/BaseAction';
import { ResponseManager } from '../../guerilla/utils/api/ResponseManager';
import { AxiosRequest, AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';

// Keyword
const ISSUE_PASS = 'ISSUE_PASS';

export const issuePassReducer =
  (state: NetworkResponse<IssuePassResponse>, action: BaseAction) =>
    ResponseManager.manage(ISSUE_PASS, state, action);

// Params
export class Params {
  constructor(
    public readonly company_id: string,
    public readonly passes: string,
    public readonly description?: string,
  ) { }
}

// Action 
export const issuePass = (
  authorization: string,
  params: Params
): AxiosRequestType => AxiosRequest.build(
  ISSUE_PASS,
  'POST',
  '/issue_pass',
  params,
  authorization
);
