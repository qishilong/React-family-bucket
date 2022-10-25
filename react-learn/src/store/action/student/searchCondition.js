export const changeCondition = Symbol("changeCondition");

export const changeConditionFn = newCondition => {
    return {
        type: changeCondition,
        payload: newCondition,
    };
};
