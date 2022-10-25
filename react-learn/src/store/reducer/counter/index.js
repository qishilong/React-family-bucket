import { decrease, increase } from "../../action/counter";

const counterReducer = (state = 10, { type }) => {
    switch (type) {
        case increase:
            return state + 1;
        case decrease:
            return state - 1;
        default:
            return state;
    }
};
export default counterReducer;
