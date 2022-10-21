import logger from "redux-logger";

import reduxPromise from "../redux-promise";
import { applyMiddleware, createStore } from "../reduxSourceCodeAnalysis";
import reducer from "./reducer";

// import reduxPromise from "redux-promise";

// 应用中间件，方式1
const store = createStore(reducer, applyMiddleware(reduxPromise, logger));

// 方式2
// const store = applyMiddleware(thunk, logger)(createStore)(reducer);

export default store;
