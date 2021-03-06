import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];



const store: Store & {
  dispatch: any;
} = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware( ...middleware))
);

export default store;
