import { cancel, delay, fork, put, take, takeLatest } from "redux-saga/effects";

import { asyncDecrease, asyncIncrease, autoIncrease, decreaseFn, increaseFn, stopAutoIncrease } from "../action/counter";

/**
 * takeEvery 实现原理
 */
// const takeEvery = (actionType, saga) => {
//     return fork(function* () {
//         while (true) {
//             const action = yield take(actionType);
//             fork(saga);
//         }
//     });
// };

let isStop = false; // 是否停止

function* autoIncreaseFn() {
    while (true) {
        yield delay(2000);
        if (isStop) {
            break;
        }
        yield put(increaseFn());
    }
}

const stopAutoIncreaseFn = () => {
    isStop = true;
};

function* conuterTask() {
    yield takeLatest(autoIncrease, autoIncreaseFn);
    yield takeLatest(stopAutoIncrease, stopAutoIncreaseFn);
    console.log("正在监听autoIncreaseFn");
}

export default conuterTask;
