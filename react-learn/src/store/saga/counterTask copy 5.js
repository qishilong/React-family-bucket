import { cancel, cancelled, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";

import { asyncDecrease, asyncIncrease, autoIncrease, decreaseFn, increaseFn, stopAutoIncrease } from "../action/counter";

/**
 * 自动增加和自动停止流程
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
    while (true) {
        yield take(autoIncrease);
        const task = yield fork(function* () {
            try {
                while (true) {
                    yield delay(2000);
                    yield put(increaseFn());
                }
            } finally {
                if (yield cancelled()) {
                    console.log("自动增加任务被取消了！");
                }
            }
        });
        yield take(stopAutoIncrease);
        yield cancel(task);
    }
}

function* conuterTask() {
    yield fork(autoTask);
    console.log("正在监听autoTask");
}

export default conuterTask;
