import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import combineReducers from "./reducers";
import rootSaga from "./sagas";

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper(configureStore, { debug: false });
