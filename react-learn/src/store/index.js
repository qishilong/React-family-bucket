// 用于创建仓库，并导出
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import rootSaga from "./saga";

// import logger from "redux-logger";
const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

const store = createStore(
    reducer,
    // applyMiddleware(sagaMid, logger)
    applyMiddleware(sagaMid),
);

console.log(store.getState());

sagaMid.run(rootSaga); //启动saga任务

export default store;