import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import createTransform from "redux-persist/es/createTransform";

import rootReducer from "../reducers";
import { persistCallback } from "..";

// stop isFetching and isError keys from being persisted
const blacklistTransform = createTransform(inboundState => {
  if (!inboundState.hasOwnProperty("isFetching")) return inboundState;
  return {
    ...inboundState,
    isFetching: undefined,
    isError: undefined,
  };
});

export const persistOptions = {
  blacklist: ["screen"],
  transforms: [blacklistTransform],
};

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareList = [sagaMiddleware];
  const middleware = applyMiddleware(...middlewareList);

  const store = createStore(
    enhanceReducer(rootReducer),
    composeWithDevTools(enhanceStore, middleware),
  );

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
