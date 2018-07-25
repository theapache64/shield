import { combineReducers } from 'redux';
import { loginReducer } from '../api/routes/LogIn';

export interface RootReducer {
  loginReducer: any;
}

const allReducers: RootReducer = {
  loginReducer
};

export const rootReducer = combineReducers(allReducers);
