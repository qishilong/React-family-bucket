const logger = store => next => action => {
    console.log("老状态:", store.getState());
    console.log(action);
    next(action);
    console.log("新状态:", store.getState());
    console.log(action);
};

const loggerPlugin = {
    onAction: logger,
};

export default loggerPlugin;
