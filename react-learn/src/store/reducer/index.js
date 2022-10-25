import { combineReducers } from "redux";

import counterReducer from "./counter";
import studentReducer from "./student";

const reducer = combineReducers({ counterReducer, studentReducer });

export default reducer;
