// import { combineReducers } from "redux";
import { combineReducers } from "../../reduxSourceCodeAnalysis";
import loginUserReducer from "./loginUserReducer";
import userReducer from "./userReducer";

// const combineReducers = (state = {}, action) => {
//     const newState = {
//         loginUserReducer: loginUserReducer(state.loginUserReducer, action),
//         userReducer: userReducer(state.userReducer, action),
//     };
//     return newState;
// };

export default combineReducers({
    loginUser: loginUserReducer,
    user: userReducer,
});
