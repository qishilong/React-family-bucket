import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";

function* sagaTask() {
    yield all([counterTask(), studentTask()]);
    console.log("saga完成");
}
export default sagaTask;
