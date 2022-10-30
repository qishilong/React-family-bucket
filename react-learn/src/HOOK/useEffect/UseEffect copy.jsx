import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [n, setN] = useState(0);
    // 以下代码属于副操作
    // document.title = `计数器: ${n}`;

    useEffect(() => {
        console.log("改变标题的副操作");
        document.title = `计数器: ${n}`;
    });
    useEffect(() => {
        console.log("其他副操作");
    });

    return (
        <>
            <span>{n}</span>
            <button onClick={() => setN(n + 1)}>n+1</button>
        </>
    );
};

export default UseEffect;
