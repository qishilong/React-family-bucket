/**
 * 判断某个对象是否是一个flat-object
 * @param {*} obj
 */
const isFlatObject = obj => {
    if (typeof obj !== "object") {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
};
export default isFlatObject;
