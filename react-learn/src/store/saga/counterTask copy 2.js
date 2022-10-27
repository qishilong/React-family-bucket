import { cancel, delay, fork, put, take, takeEvery } from "redux-saga/effects";

import { asyncDecrease, asyncIncrease, autoIncrease, decreaseFn, increaseFn } from "../action/counter";

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

function* autoIncreaseFn() {
    let task;
    while (true) {
        yield take(autoIncrease);
        if (task) {
            // 说明之前有任务,先把之前的任务取消，再开启新的任务
            yield cancel(task);
            console.log("之前的任务被取消了！");
        }
        task = yield fork(function* () {
            yield delay(2000);
            yield put(increaseFn());
        });
    }
}

function* conuterTask() {
    yield fork(autoIncreaseFn);
    console.log("正在监听autoIncreaseFn");
}

export default conuterTask;
