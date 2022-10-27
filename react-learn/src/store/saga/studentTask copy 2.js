import { put, takeEvery } from "redux-saga/effects";

import { searchStudents } from "../../services/fetchStudent";
import { fetchStudent, setIsLoading, setStudentAndTotal } from "../action/student/searchResult";

function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
    //当saga发现得到的结果是一个Promise对象，它会自动等待该Promise完成
    //完成之后，会把完成的结果作为值传递到下一次next
    //如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误

    const resp = yield searchStudents();
    yield put(setStudentAndTotal(resp.data, resp.cont));
    yield put(setIsLoading(false));
    console.log(resp);
}

function* fetchStudentFn() {
    yield takeEvery(fetchStudent, fetchStudents);
    console.log("正在监听fetchStudent");
}

export default fetchStudentFn;
