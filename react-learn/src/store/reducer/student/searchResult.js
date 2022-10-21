import { SETDATAACTION, SETLOADINGACTION } from "../../action/searchResult";

const initital = {
    data: [],
    total: 0,
    isLoading: false,
};

const resultReducer = (state = initital, { type, payload }) => {
    switch (type) {
        case SETDATAACTION:
            return {
                ...state,
                ...payload,
            };
        case SETLOADINGACTION:
            return {
                ...state,
                isLoading: payload,
            };
        default:
            return state;
    }
};

export default resultReducer;
