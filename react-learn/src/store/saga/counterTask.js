import { call, delay, fork, put, race, take } from "redux-saga/effects";

import { autoIncrease, increaseFn, stopAutoIncrease } from "../action/counter";

/**
 * 自动增加和停止的流程控制
 * 流程: 自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
    while (true) {
        yield take(autoIncrease); // 只监听autoIncrease
        yield race({
            autoIncrease: call(function* () {
                while (true) {
                    yield delay(2000);
                    yield put(increaseFn());
                }
            }),
            cancel: take(stopAutoIncrease),
        });
    }
}

function* conuterTask() {
    yield fork(autoTask);
    console.log("正在监听autoIncreaseFn");
}

export default conuterTask;
