import { LoadIssuePassResponse } from '../responses/LoadIssuePassResponse';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { BaseAction } from '../../guerilla/utils/api/BaseAction';
import { ResponseManager } from '../../guerilla/utils/api/ResponseManager';
import { AxiosRequest, AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';

// Keyword
const LOAD_ISSUE_PASS = 'LOAD_ISSUE_PASS';

export const loadIssuePassReducer =
  (state: NetworkResponse<LoadIssuePassResponse>, action: BaseAction) =>
    ResponseManager.manage(LOAD_ISSUE_PASS, state, action);

// Params
export class Params {
  constructor(
  ) { }
}

// Action 
export const loadIssuePass = (apiKey: string): AxiosRequestType => AxiosRequest.build(
  LOAD_ISSUE_PASS,
  'GET',
  '/load_issue_pass',
  {},
  apiKey
);
