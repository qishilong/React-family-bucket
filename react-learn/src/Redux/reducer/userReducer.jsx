// import {v4} from "uuid";
import { ADDUSER, DELETEUSER, UPDATEUSER } from "../action/userAction";

const initialState = [
    { id: 1, name: "用户1", age: 11 },
    { id: 2, name: "用户2", age: 12 },
];

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDUSER:
            return [...state, payload];
        case UPDATEUSER:
            return state.map(item => (item.id === payload.id ? { ...item, ...payload } : item));
        case DELETEUSER:
            return state.filter(item => item.id !== payload);
        default:
            return state;
    }
};
export default userReducer;
