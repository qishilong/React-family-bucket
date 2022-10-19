import actionType from "./utils/actionType";
import isFlatObject from "./utils/isFletObject";

/**
 * 验证reducers有没有错误
 */
const validateReducers = reducers => {
    if (typeof reducers !== "object") {
        throw new TypeError("reducers must be an object");
    }
    if (!isFlatObject(reducers)) {
        throw new TypeError("reducers must be an flat objects");
    }
    // 验证reducer的返回结果是不是undefined
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            let state = reducer(undefined, { type: actionType.INIT(6) });
            if (state === undefined) {
                throw new TypeError("reducers must no return undefined");
            }
            state = reducer(undefined, { type: actionType.UNKNOWN(6) });
            if (state === undefined) {
                throw new TypeError("reducers must no return undefined");
            }
            return;
        }
    }
};

const combineReducers = reducers => {
    // 验证reducers有没有错误
    validateReducers(reducers);
    return (state = {}, action) => {
        const newState = {}; // 要返回的新的状态
        for (const key in reducers) {
            if (Object.hasOwnProperty.call(reducers, key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState;
    };
};

export default combineReducers;
