import { take } from "redux-saga/effects";
import { asyncIncrease } from "../action/counter";

function* counterTask() {
    while (true) {
        const action = yield take(asyncIncrease);
        console.log("监听到了async-increase", action);
    }
}
export default counterTask;
