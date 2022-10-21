import { searchStudents } from "../../services/fetchStudent";

/**
 * redux-promise 要求type必须是一个字符串
 */
export const SETDATAACTION = "setDataAction";
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

// export const getStudentData = () => {
//     return async (dispatch, getState) => {
//         dispatch(setLoading(true));
//         console.log(getState(), 11111);
//         const condition = getState().student.condition;
//         const resp = await searchStudents(condition);
//         dispatch(setStudentData(resp.datas, resp.cont));
//         dispatch(setLoading(false));
//     };
// };

/**
 * 由于使用了redux-promise中间件，因此，允许action是一个promise对象，在promise中，如果要触发dispatch，则需要使用reslove
 */
// export const getStudentData = () => {
//     return new Promise((reslove, reject) => {
//         // setTimeout(() => {
//         //     const action = setStudentData([
//         //         { id: 1, name: "aaa" },
//         //         { id: 2, name: "bbb" },
//         //     ]);
//         //     reslove(action);
//         // }, 3000);
//         const action = setStudentData([
//             { id: 1, name: "aaa" },
//             { id: 2, name: "bbb" },
//         ]);
//         reslove(action);
//     });
// }

export const getStudentData = condition => {
    return {
        type: SETDATAACTION,
        payload: searchStudents(condition).then(resp => ({
            data: resp.data,
            total: resp.cont,
        })),
    };
};