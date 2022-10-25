import { isLoading, studentAndTotal } from "../../action/student/searchResult";

const initialState = {
    data: [],
    total: 0,
    isLoading: false,
};

const resultReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case studentAndTotal:
            return {
                ...state,
                ...payload,
            };
        case isLoading:
            return {
                ...state,
                isLoading: payload,
            };
        default:
            return state;
    }
};

export default resultReducer;
