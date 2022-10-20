import { getAllStudents } from "../../services/fetchStudent";

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS = Symbol("set-users");
export const SETLOADING = Symbol("set-loading"); // 设置加载状态

export const addUserAction = user => ({
    type: ADDUSER,
    payload: user,
});

export const deleteUserAction = id => ({
    type: DELETEUSER,
    payload: id,
});

export const updateUserAction = (id, newUserData) => ({
    type: UPDATEUSER,
    payload: {
        ...newUserData,
        id,
    },
});

export const setUsersAction = users => ({
    type: SETUSERS,
    payload: users,
});

/**
 * 设置loading加载效果
 * @param {boolean} isLoading
 */
export const setLoadingAction = isLoading => ({
    type: SETLOADING,
    payload: isLoading,
});

export const getAllStudentsFun = () => {
    // 由于 thunk 的存在，允许action是一个带有副作用的函数
    return async dispatch => {
        dispatch(setLoadingAction(true));
        const data = await getAllStudents();
        const action = setUsersAction(data);
        dispatch(setUsersAction(action));
        dispatch(setLoadingAction(false));
    };
};
