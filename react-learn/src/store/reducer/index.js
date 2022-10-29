// 创建一个唯一的reducer
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import history from "../history";
import counter from "./counter";
import students from "./student";

export default combineReducers({
    students,
    counter,
    router: connectRouter(history),
});