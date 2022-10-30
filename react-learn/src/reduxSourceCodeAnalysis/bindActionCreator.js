/**
 * 得到一个自动分发action的创建函数
 */
const getAutoDispatchActionCreator = (actionCreator, dispatch) => {
    return (...argus) => {
        const action = actionCreator(...argus);
        return dispatch(action);
    };
};

const bindActionCreator = (actionCreators, dispatch) => {
    if (typeof actionCreators === "function") {
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    } else if (typeof actionCreators === "object") {
        const result = {};
        for (const key in actionCreators) {
            if (actionCreators.hasOwnProperty(key)) {
                const actionCreator = actionCreators[key];
                if (typeof actionCreator === "function") {
                    result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
                }
            }
        }
        return result;
    } else {
        throw new Error("actionCreators must be an object or function which means action creator");
    }
};

export default bindActionCreator;
