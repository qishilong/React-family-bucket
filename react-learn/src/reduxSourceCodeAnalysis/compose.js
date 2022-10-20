const compose = (...funcs) => {
    if (funcs.length === 0) {
        return funcs => funcs;
    } else if (funcs.length === 1) {
        // 要复合的函数只有一个
        return funcs[0];
    }
    return funcs.reduce(
        (a, b) =>
            (...argus) =>
                a(b(...argus)),
    );

    // return (...argus) => {
    //     let lastReturn = null; // 记录上一个函数返回的结果，它将作为下一函数的参数
    //     for (let i = funcs.length - 1; i >= 0; i--) {
    //         const func = funcs[i];
    //         if (i === funcs.length - 1) {
    //             // 最后一项
    //             lastReturn = func(...argus);
    //         } else {
    //             lastReturn = func(lastReturn);
    //         }
    //     }
    //     return lastReturn;
    // };
};
export default compose;
