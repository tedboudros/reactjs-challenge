import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import usersReducer from "./reducers/users.reducer";

const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();

const rootReducer = combineReducers({
  users: usersReducer
});

let middleware = [thunk];
const logger = createLogger({ collapsed: true });
middleware = [...middleware, logger, reduxImmutableStateInvariant];

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default function configureStore() {
  return createStore(rootReducer, {}, enhancer);
}
