import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { loadHomeReducer } from '../api/routes/LoadHome';
import { GuardReducer, guardReducer } from './GuardReducer';
import { loadIssuePassReducer } from '../api/routes/LoadIssuePass';
import { issuePassReducer } from '../api/routes/IssuePass';
import { getPassesReducer } from '../api/routes/GetPasses';

export interface RootReducer {
  loginReducer: any;
  loadHomeReducer: any;
  guardReducer: any;
  loadIssuePassReducer: any;
  issuePassReducer: any;
  getPassesReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  loadHomeReducer,
  guardReducer,
  loadIssuePassReducer,
  issuePassReducer,
  getPassesReducer
};

export const rootReducer = combineReducers(allReducers);
