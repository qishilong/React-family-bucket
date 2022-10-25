import { combineReducers } from "redux";

import conditionReducer from "./conditionReducer";
import resultReducer from "./resultReducer";

const studentReducer = combineReducers({ conditionReducer, resultReducer });

export default studentReducer;
