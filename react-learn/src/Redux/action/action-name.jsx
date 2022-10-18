import { DECREASE, INCREASE, SET } from "./action-type";

export const getDecreaseAction = () => {
    return { type: DECREASE };
};
export const getIncreaseAction = () => {
    return { type: INCREASE };
};

export const getSetAction = payload => {
    return {
        type: SET,
        payload: payload,
    };
};
