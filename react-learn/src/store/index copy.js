// import { bindActionCreators, createStore } from "redux";
import { bindActionCreators, createStore } from "../reduxSourceCodeAnalysis";
import { addUserAction, deleteUserAction } from "./action/userAction";
import reducer from "./reducer";

const store = createStore(reducer);

// console.log(store);

const userAction = {
    add: addUserAction,
    delete: deleteUserAction,
};

const oldDispatch = store.dispatch; // 保存原本的dispatch函数

// store.subscribe(() => {
//     console.log("监听器1", store.getState());
// });

// const unListen = store.subscribe(() => {
//     console.log("监听器1", store.getState());
// });

// 中间件1
store.dispatch = action => {
    console.log("中间件1");
    console.log("旧的数据", store.getState());
    oldDispatch(action);
    console.log("新的数据", store.getState());
};

store.dispatch = action => {
    console.log("中间件2");
    console.log("旧的数据", store.getState());
    oldDispatch(action);
    console.log("新的数据", store.getState());
};


const actions = bindActionCreators(userAction, store.dispatch);
console.log(actions);


actions.add({ id: 1, name: "123", age: 100 });

// unListen(); //取消监听

actions.delete(2);
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
actions.add({ id: 1, name: "123", age: 100 });
