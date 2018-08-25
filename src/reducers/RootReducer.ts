import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { loadHomeReducer } from '../api/routes/LoadHome';
import { GuardReducer, guardReducer } from './GuardReducer';
import { loadIssuePassReducer } from '../api/routes/LoadIssuePass';
import { issuePassReducer } from '../api/routes/IssuePass';

export interface RootReducer {
  loginReducer: any;
  loadHomeReducer: any;
  guardReducer: any;
  loadIssuePassReducer: any;
  issuePassReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  loadHomeReducer,
  guardReducer,
  loadIssuePassReducer,
  issuePassReducer
};

export const rootReducer = combineReducers(allReducers);
