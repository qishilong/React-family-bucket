const thunkMiddleware = extra => {
    return store => next => action => {
        if (typeof action === "function") {
            return action(store.dispatch, store.getState, extra);
        }
        return next(action);
    };
};

const thunk = thunkMiddleware();
thunk.withExtraArgument = thunkMiddleware;
export default thunk;
