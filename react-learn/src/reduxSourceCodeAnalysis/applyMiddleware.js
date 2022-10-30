import compose from "./compose";

/**
 * 注册中间件
 * @param {...any} middleware 所有的中间件
 */
const applyMiddleware = (...middleware) => {
    return createStore => {
        return (reducer, defalutState) => {
            const store = createStore(reducer, defalutState);
            let dispatch = () => {
                throw new Error("目前还不能使用dispatch");
            };
            const simpleState = {
                getState: store.getState,
                dispatch: (...argus) => dispatch(...argus),
            };

            const dispatchProducers = middleware.map(item => item(simpleState));
            dispatch = compose(...dispatchProducers)(store.dispatch);
            return {
                ...store,
                dispatch,
            };
        };
    };
};
export default applyMiddleware;
