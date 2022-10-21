import { searchStudents } from "../../services/fetchStudent";

export const SETDATAACTION = Symbol("setDataAction");
export const SETLOADINGACTION = Symbol("setLoadingAction");

export const setStudentData = (arr, total) => {
    return {
        type: SETDATAACTION,
        payload: {
            data: arr,
            total: total,
        },
    };
};

export const setLoading = payload => {
    return {
        type: SETLOADINGACTION,
        payload: payload,
    };
};

export const getStudentData = () => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        console.log(getState(), 11111);
        const condition = getState().student.condition;
        const resp = await searchStudents(condition);
        dispatch(setStudentData(resp.datas, resp.cont));
        dispatch(setLoading(false));
    };
};
