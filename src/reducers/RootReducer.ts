import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';
import { loadHomeReducer } from '../api/routes/LoadHome';

export interface RootReducer {
  loginReducer: any;
  loadHomeReducer: any;
}

const allReducers: RootReducer = {
  loginReducer,
  loadHomeReducer
};

export const rootReducer = combineReducers(allReducers);
