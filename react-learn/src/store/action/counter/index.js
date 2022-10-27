export const increase = Symbol("increase");
export const decrease = Symbol("decrease");
export const asyncIncrease = Symbol("asyncIncrease");
export const asyncDecrease = Symbol("asyncDecrease");
export const autoIncrease = Symbol("autoIncrement"); // 自动增加
export const stopAutoIncrease = Symbol("stopAutoIncrement"); // 停止自动增加

export const increaseFn = () => {
    return { type: increase };
};

export const decreaseFn = () => {
    return { type: decrease };
};

export const asyncIncreaseFn = () => {
    return { type: asyncIncrease };
};

export const asyncDecreaseFn = () => {
    return { type: asyncDecrease };
};

export const autoIncreaseFn = () => {
    return {
        type: autoIncrease,
    };
};

export const stopAutoIncreaseFn = () => {
    return {
        type: stopAutoIncrease,
    };
};