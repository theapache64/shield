import { default as axios } from 'axios';
import { applyMiddleware, createStore } from 'redux';
import { default as logger } from 'redux-logger';
import { rootReducer } from './reducers/RootReducer';
const axiosMiddleware = require('redux-axios-middleware').default;
import { default as createSagaMiddleware } from 'redux-saga';
import { rootSaga } from './sagas/RootSaga';

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

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    logger,
    sagaMiddleware,
    axiosMiddleware(client),
  )
);

sagaMiddleware.run(rootSaga);
