export const SETCONDITIONACTION = Symbol("setConditionAction");

export const searchConditionAction = condition => {
    return {
        type: SETCONDITIONACTION,
        payload: condition,
    };
};
