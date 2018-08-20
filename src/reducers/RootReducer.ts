import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { loadHomeReducer } from '../api/routes/LoadHome';
import { GuardReducer, guardReducer } from './GuardReducer';
import { loadIssuePassReducer } from '../api/routes/LoadIssuePass';

export interface RootReducer {
  loginReducer: any;
  loadHomeReducer: any;
  guardReducer: any;
  loadIssuePassReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  loadHomeReducer,
  guardReducer,
  loadIssuePassReducer
};

export const rootReducer = combineReducers(allReducers);
