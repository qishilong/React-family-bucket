export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");

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
