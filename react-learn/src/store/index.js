import logger from "redux-logger";

import { applyMiddleware, bindActionCreators, createStore } from "../reduxSourceCodeAnalysis";
import { addUserAction, deleteUserAction } from "./action/userAction";
import reducer from "./reducer";

// import { createLogger } from "redux-logger"; // 打印日志配置
// const logger = createLogger({
//     // ... options
// });

const userAction = {
    add: addUserAction,
    delete: deleteUserAction,
};

// 应用中间件，方式1
// const store = createStore(reducer, applyMiddleware(logger));

// 方式2
const store = applyMiddleware(logger)(createStore)(reducer);

const actions = bindActionCreators(userAction, store.dispatch);

actions.add({ id: 1, name: "123", age: 100 });
actions.delete(2);
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
