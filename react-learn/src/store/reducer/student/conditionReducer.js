import { changeCondition } from "../../action/student/searchCondition";

// 默认状态
const initialState = {
    key: "",
    sex: -1,
    page: 1,
    limit: 10,
};

const conditionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case changeCondition:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
export default conditionReducer;
