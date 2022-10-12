import { useEffect, useState } from "react";

const MoveBlock = props => {
    useEffect(() => {
        console.log("副作用函数，仅挂载时运行一次");
        return () => console.log("清理函数，仅卸载时运行一次");
    }, []); //使用空数组作为依赖项，则副作用函数仅在挂载的时候运行

    console.log("渲染组件");
    const [, forceUpdate] = useState({});
    return (
        <>
            <h1>MoveBlock组件</h1>
            <button onClick={() => forceUpdate({})}>刷新组件</button>
        </>
    );
};

const UseEffect = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show && <MoveBlock />}
            <p>
                <button onClick={() => setShow(!show)}>显示/隐藏</button>
            </p>
        </>
    );
};

export default UseEffect;
