import logger from "redux-logger";

import thunk from "../redux-thunk";
import { applyMiddleware, createStore } from "../reduxSourceCodeAnalysis";
import reducer from "./reducer";

// import thunk from "redux-thunk";

// 应用中间件，方式1
const store = createStore(reducer, applyMiddleware(thunk, logger));

// 方式2
// const store = applyMiddleware(thunk, logger)(createStore)(reducer);

export default store;
