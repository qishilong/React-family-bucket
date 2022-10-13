import { useState } from "react";

import useTime from "./HOOK/myHOOKs/useTime";

const UseTimer = () => {
    const func = () => {
        console.log("一些副操作");
    };
    useTime(func, 1000);
    return <>组件</>;
};

const App = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <p>{show && <UseTimer />}</p>
            <button onClick={() => setShow(!show)}>显示/隐藏</button>
        </>
    );
};

export default App;
