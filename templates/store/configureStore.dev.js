import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareList = [sagaMiddleware];
  const middleware = applyMiddleware(...middlewareList);

  const store = createStore(rootReducer, composeWithDevTools(middleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
