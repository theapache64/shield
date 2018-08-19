import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { loadHomeReducer } from '../api/routes/LoadHome';
import { GuardReducer, guardReducer } from './GuardReducer';

export interface RootReducer {
  loginReducer: any;
  loadHomeReducer: any;
  guardReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  loadHomeReducer,
  guardReducer,
};

export const rootReducer = combineReducers(allReducers);
