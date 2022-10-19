import { SETLOGINUSER } from "../action/loginUserAction";

const initialState = null;

const loginUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SETLOGINUSER:
            return payload;
        default:
            return state;
    }
};

export default loginUserReducer;
