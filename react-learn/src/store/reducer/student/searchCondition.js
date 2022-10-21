import { SETCONDITIONACTION } from "../../action/searchCondition";

const initital = {
    page: 1,
    limit: 10,
    key: "",
    sex: -1,
};

const conditionReducer = (state = initital, { type, payload }) => {
    switch (type) {
        case SETCONDITIONACTION:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
export default conditionReducer;
