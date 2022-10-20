// import { applyMiddleware, bindActionCreators, createStore } from "redux";
import { applyMiddleware, bindActionCreators, createStore } from "../reduxSourceCodeAnalysis";
import { addUserAction, deleteUserAction } from "./action/userAction";
import reducer from "./reducer";


const userAction = {
    add: addUserAction,
    delete: deleteUserAction,
};

// /**
//  * 中间件函数
//  * @param {*} store
//  * @param {要返回的dispatch} next
//  * @param {*} action
//  */
// function log1(store) {
//     return function (next) {
//         console.log(next);
//         // 以下是要返回的dispatch
//         return function (action) {
//             console.log("中间件1");
//             console.log("旧数据", store.getState());
//             console.log(action);
//             next(action);
//             console.log("新的数据", store.getState());
//             console.log("");
//         };
//     };
// }

// /**
//  * 中间件函数
//  * @param {*} store
//  * @param {dispatch} next
//  * @param {*} action
//  */

// function log2(store) {
//     return function (next) {
//         console.log(next);
//         // 以下是要返回的dispatch
//         return function (action) {
//             console.log("中间件1");
//             console.log("旧数据", store.getState());
//             console.log(action);
//             next(action);
//             console.log("新的数据", store.getState());
//             console.log("");
//         };
//     };
// }

const log1 = store => next => action => {
    console.log("中间件1");
    console.log("旧数据", store.getState());
    console.log(action);
    next(action);
    console.log("新的数据", store.getState());
    console.log("");
};

const log2 = store => next => action => {
    console.log("中间件1");
    console.log("旧数据", store.getState());
    console.log(action);
    next(action);
    console.log("新的数据", store.getState());
    console.log("");
};

// 应用中间件，方式1
// const store = createStore(reducer, applyMiddleware(log1, log2));

// 方式2
const store = applyMiddleware(log1, log2)(createStore)(reducer);

const actions = bindActionCreators(userAction, store.dispatch);

actions.add({ id: 1, name: "123", age: 100 });
actions.delete(2);
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
