import { bindActionCreators, createStore } from "redux";

import { addUserAction, deleteUserAction } from "./action/userAction";
import reducer from "./reducer";

// import { createStore } from "../reduxSourceCodeAnalysis";
const store = createStore(reducer);

// console.log(store);

const userAction = {
    add: addUserAction,
    delete: deleteUserAction,
};

const actions = bindActionCreators(userAction, store.dispatch);

const unListen = store.subscribe(() => {
    console.log("监听器1", store.getState());
});

actions.add({ id: 1, name: "123", age: 100 });

// unListen(); //取消监听

actions.delete(2);
