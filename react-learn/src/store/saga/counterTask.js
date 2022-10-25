import { takeEvery } from "redux-saga/effects";
import { asyncIncrease, asyncDecrease } from "../action/counter";

function* asyncIncreaseFunc() {
    console.log("触发了asyncIncrease");
}
function* asyncDecreaseFunc() {
    console.log("触发了asyncDecrease");
}

function* counterTask() {
    yield takeEvery(asyncIncrease, asyncIncreaseFunc);
    yield takeEvery(asyncDecrease, asyncDecreaseFunc);
    console.log("正在监听asyncIncrease, asyncDecrease");
}
export default counterTask;
