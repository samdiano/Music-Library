import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import axios from 'axios';
// import { asyncActions } from './util/AsyncUtil';


import thunk from "redux-thunk";

import rootReducer from './reducers';

const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['user-key'] = token;
  } else {
    delete axios.defaults.headers.common['user-key'];
  }
};
const middleware = [thunk];

// const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
const store = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(
      createLogger(), ...middleware)
  ));

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

export default store;