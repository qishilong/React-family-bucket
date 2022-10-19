export const SETLOGINUSER = Symbol("set-login-user");

/**
 * 设置用户登陆的action
 * @param {*} user
 */
export const setUserLogin = user => {
    return {
        type: SETLOGINUSER,
        payload: user,
    };
};
