import { delay, put, takeEvery } from "redux-saga/effects";

import { actionTypes, decrease, increase } from "../action/counter";

function* asyncIncrease() {
    yield delay(2000);
    yield put(increase());
}

function* asyncDecrease() {
    yield delay(2000);
    yield put(decrease());
}

function* counterTask() {
    yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
    console.log("正在监听asyncIncrease、asyncDecrease");
}
export default counterTask;
