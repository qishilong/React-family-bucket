import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { applyMiddleware, createStore } from "../reduxSourceCodeAnalysis";
import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddle = createSagaMiddleware(); // 创建一个saga中间件

const store = createStore(reducer, applyMiddleware(sagaMiddle, logger));

sagaMiddle.run(rootSaga);   // 启动saga任务
export default store;
