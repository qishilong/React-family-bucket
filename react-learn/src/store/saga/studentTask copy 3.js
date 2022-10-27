import { call, put, select, takeEvery } from "redux-saga/effects";

import { fetchStudent, setIsLoading, setStudentAndTotal } from "../action/student/searchResult";

const mockData = (condition, callback) => {
    console.log("condition:", condition);
    setTimeout(() => {
        if (Math.random() > 0.5) {
            //nodejs风格
            callback(null, {
                cont: 78,
                datas: [
                    { id: 1, name: "abc" },
                    { id: 2, name: "bcd" },
                ],
            });
        } else {
            callback(new Error("获取数据失败！"), null);
        }
    }, 2000);
};

function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
    const condition = yield select(state => state.studentReducer.conditionReducer);
    // 根据call指令，获取当前仓库的条件
    const resp = yield call(mockData, condition);
    console.log(resp);
    yield put(setStudentAndTotal(resp.datas, resp.cont));
    yield put(setIsLoading(false));
    console.log(resp);
}

function* fetchStudentFn() {
    yield takeEvery(fetchStudent, fetchStudents);
    console.log("正在监听fetchStudent");
}

export default fetchStudentFn;
