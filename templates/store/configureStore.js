// module.exports = require("./configureStore.dev");
import { createStore } from "redux";

import rootReducer from "../reducers";

export default function configureStore() {
  return createStore(rootReducer);
}
