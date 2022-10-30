import isPromise from "is-promise";
import { isPlainObject, isString } from "lodash";

/**
 * 判断一个action是不是一个标准的flux的action
 */
const isFluxAction = action => {
    //action必须是一个平面对象 plain-object
    //action.type必须是一个字符串
    //action的属性不能包含其他非标准属性  标准属性["type", "payload", "error", "meta"]
    return (
        isPlainObject(action) &&
        isString(action.type) &&
        Object.keys(action).every(key => ["type", "payload", "error", "meta"].includes(key))
    );
};

const reduxPromise =
    ({ dispatch }) =>
    next =>
    action => {
        if (!isFluxAction(action)) {
            return isPromise(action) ? action.then(dispatch) : next(action);
        }
        return isPromise(action.payload)
            ? action.payload
                  .then(payload => dispatch({ ...action, payload }))
                  .catch(error => dispatch({ ...action, payload: error, error: true }))
            : next(action);
    };
export default reduxPromise;
