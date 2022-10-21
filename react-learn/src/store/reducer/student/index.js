import { combineReducers } from "../../../reduxSourceCodeAnalysis";
import conditionReducer from "./searchCondition";
import resultReducer from "./searchResult";

// import { combineReducers } from "redux";
export default combineReducers({
    condition: conditionReducer,
    student: resultReducer,
});
