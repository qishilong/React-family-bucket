/**
 * 得到指定长度的随机字符串
 * @param {number} length
 */
const getRandomString = length => {
    return Math.random().toString(36).substring(2, length).split("").join(".");
};
const getActionType = {
    INIT(length) {
        return `@@redux/INIT${getRandomString(length)}`;
    },
    UNKNOWN(length) {
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(length)}`;
    },
};
export default getActionType;
