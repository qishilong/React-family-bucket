// 用于创建仓库，并导出
import { composeWithDevTools } from "@redux-devtools/extension";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import history from "./history";
import reducer from "./reducer";
import rootSaga from "./saga";

// import logger from "redux-logger";
const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

const middleware = routerMiddleware(history);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, sagaMid)));

console.log(store.getState());

sagaMid.run(rootSaga); //启动saga任务

export default store;