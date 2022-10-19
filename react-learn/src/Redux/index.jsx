import { createStore } from "redux";

import { addUserAction, deleteUserAction, updateUserAction } from "./action/userAction";
import reducer from "./reducer";

// import { v4 } from "uuid";

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(
    addUserAction({
        id: 3,
        name: "eqweqw",
        age: 13,
    }),
);

console.log(store.getState());

store.dispatch(deleteUserAction(1));

console.log(store.getState());

store.dispatch(updateUserAction(2, { name: "fadsfad" }));

console.log(store.getState());
