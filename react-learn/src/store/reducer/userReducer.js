import { ADDUSER, DELETEUSER, SETLOADING, SETUSERS, UPDATEUSER } from "../action/userAction";

const initialState = {
    users: [],
    isLoading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDUSER:
            return {
                ...state,
                users: [...state.users, payload],
            };
        case UPDATEUSER:
            return {
                ...state,
                users: state.users.map(item =>
                    item.id === payload.id ? { ...item, ...payload } : item,
                ),
            };
        case DELETEUSER:
            return {
                ...state,
                user: state.filter(item => item.id !== payload),
            };
        case SETUSERS:
            return {
                ...state,
                users: payload,
            };
        case SETLOADING:
            return {
                ...state,
                users: payload,
            };
        default:
            return state;
    }
};
export default userReducer;
