import { call, race } from "redux-saga/effects";

import { decreaseFn, increaseFn } from "../action/counter";

/**
 * 异步得到一个action
 */
const asyncAction = () => {
    // 得到一个 1000 ～ 5000 之间的随机数
    const duration = Math.floor(Math.random() * 1000 + 4000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(increaseFn());
            } else {
                resolve(decreaseFn());
            }
        }, duration);
    });
};

function* conuterTask() {
    const result = yield race({
        action1: call(asyncAction),
        action2: call(asyncAction),
    });
    console.log(result);
}

export default conuterTask;
