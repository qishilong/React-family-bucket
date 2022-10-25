import actionType from "./utils/actionType";
import isFlatObject from "./utils/isFletObject";

/**
 * 实现createStore功能
 * @param {function} reducer reducer
 * @param {any} defaultState 默认的状态值
 */
const createStore = (reducer, defaultState, enChanged) => {
    // enChanged 表示applyMiddleware函数的返回值
    if (typeof defaultState === "function") {
        // 第二个参数是应用中间件的函数返回值
        enChanged = defaultState;
        defaultState = undefined;
    }
    if (typeof enChanged === "function") {
        // 进入applyMiddleware的处理逻辑
        return enChanged(createStore)(reducer, defaultState);
    }

    let currentReducer = reducer, // 当前使用的reducer
        currentState = defaultState; // 当前使用的state

    const listeners = []; // 记录所有的监听器（订阅者）

    /**
     * 实现dispatch功能
     */
    const dispatch = action => {
        if (!isFlatObject(action)) {
            throw new Error("action must be a flat object");
        }
        if (action.type === undefined) {
            throw new Error("action must be a property type");
        }

        currentState = currentReducer(currentState, action);

        for (const listener of listeners) {
            listener();
        }
    };

    /**
     * 实现getState功能
     */
    const getState = () => {
        return currentState;
    };

    /**
     * 实现监听器功能
     * @param {*} listener
     */
    const subscribe = listener => {
        listeners.push(listener); // 将监听器添加到数组中
        let isUnsubscribe = false; // 是否已经取消订阅了
        return () => {
            if (isUnsubscribe) {
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
            isUnsubscribe = true;
        };
    };

    dispatch({
        type: actionType.INIT(7),
    });

    return {
        dispatch,
        getState,
        subscribe,
    };
};

export default createStore;
