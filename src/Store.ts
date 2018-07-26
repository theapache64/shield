import { createStore, applyMiddleware } from 'redux';
import { default as axios } from 'axios';
import { rootReducer } from './reducers/RootReducer';
const axiosMiddleware = require('redux-axios-middleware').default;
import { default as logger } from 'redux-logger';

const initialState = {};

const client = axios.create({
  baseURL: 'http://theapache64.com/mock_api/get_json/shield',
  responseType: 'json',
  transformRequest: (data) => {

    if (data) {

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      return formData;
    }

    return null;

  },
});

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    axiosMiddleware(client),
    logger
  )
);
