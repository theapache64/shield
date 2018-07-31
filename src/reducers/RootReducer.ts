import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { guardReducer } from './GuardReducer';
import { loadHomeReducer } from '../api/routes/LodeHome';

export interface RootReducer {
  loginReducer: any;
  guardReducer: any;
  loadHomeReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  guardReducer,
  loadHomeReducer
};

export const rootReducer = combineReducers(allReducers);
