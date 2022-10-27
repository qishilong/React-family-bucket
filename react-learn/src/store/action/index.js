// 创建一个唯一的reducer
import { combineReducers } from "redux";

import counter from "./counter";
import students from "./student";

export default combineReducers({
    students,
    counter
})