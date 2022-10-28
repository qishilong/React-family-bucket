import { call, put, select, takeEvery } from "redux-saga/effects";

import { searchStudents } from "../../services/fetchStudent";
import { actionTypes, setIsLoading, setStudentsAndTotal } from "../action/student/searchResult";

function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true));
    const condition = yield select(state => state.students.condition);
    //使用call指令，按照当前仓库中的条件
    try {
        const resp = yield call(searchStudents, condition);
        yield put(setStudentsAndTotal(resp.data, resp.cont));
    } catch (err) {
        console.log(err.message);
    } finally {
        yield put(setIsLoading(false));
    }
}

function* studentTask() {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
    console.log("正在监听 fetchStudents");
}

export default studentTask;
