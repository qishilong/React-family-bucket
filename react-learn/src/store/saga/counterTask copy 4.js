import { cancel, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";

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
function* stopAutoIncreaseFn() {
    if (task) {
        yield cancel(task);
    }
}

let task;

function* autoIncreaseFn() {
    while (true) {
        yield take(autoIncrease);
        yield* stopAutoIncreaseFn();
        task = yield fork(function* () {
            while (true) {
                yield delay(2000);
                yield put(increaseFn());
            }
        });
    }
}

function* conuterTask() {
    yield fork(autoIncreaseFn);
    yield takeEvery(stopAutoIncrease, stopAutoIncreaseFn);
    console.log("正在监听autoIncreaseFn");
}

export default conuterTask;
