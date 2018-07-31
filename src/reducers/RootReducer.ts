import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { guardReducer } from './GuardReducer';

export interface RootReducer {
  loginReducer: any;
  guardReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  guardReducer,
};

export const rootReducer = combineReducers(allReducers);
