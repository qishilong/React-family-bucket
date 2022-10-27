import { call, put, select, takeEvery } from "redux-saga/effects";

import { searchStudents } from "../../services/fetchStudent";
import { fetchStudent, setIsLoading, setStudentAndTotal } from "../action/student/searchResult";

function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
    const condition = yield select(state => state.studentReducer.conditionReducer);
    // 根据call指令，获取当前仓库的条件
    const resp = yield call(searchStudents, condition);
    console.log(resp);
    yield put(setStudentAndTotal(resp.data, resp.cont));
    yield put(setIsLoading(false));
    console.log(resp);
}

function* fetchStudentFn() {
    yield takeEvery(fetchStudent, fetchStudents);
    console.log("正在监听fetchStudent");
}

export default fetchStudentFn;
