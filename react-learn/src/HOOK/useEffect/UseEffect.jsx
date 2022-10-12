import { useEffect, useState } from "react";

/*
    这种写法特别混乱，没有任何理由使用
*/
let n = 1;
const UseEffect = () => {
    const [, forceUpdate] = useState({});

    const fun1 = () => {
        console.log("fun1 副作用函数");
        return console.log("fun1 清除函数");
    };
    const fun2 = () => {
        console.log("fun2 副作用函数");
        return console.log("fun2 清除函数");
    };
    useEffect(n % 2 === 0 ? fun1 : fun2);

    n++;
    return <button onClick={() => forceUpdate({})}>强制刷新</button>;
};

export default UseEffect;
