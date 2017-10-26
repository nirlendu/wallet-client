// @flow

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import { userReducer, userSagas } from './user';
import { signupReducer } from './signup';
import { loginReducer, loginSagas } from './login';
import { walletReducer, walletSagas } from './wallet';
import { sidebarReducer } from './sidebar/sidebarReducer';
import { sendSagas } from './send';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  wallet: walletReducer,
  signup: signupReducer,
  login: loginReducer,
  form: formReducer,
  sidebar: sidebarReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  // ...otherMiddleware,
];

const storeEnhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, storeEnhancer);

[userSagas, loginSagas, walletSagas, sendSagas].map(sagaMiddleware.run);

export default store;
