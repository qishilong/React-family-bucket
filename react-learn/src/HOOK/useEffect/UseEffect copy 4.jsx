import { useEffect, useState } from "react";

/*
    以下是错误的写法
    只能一直输出 9
*/
const UseEffect = () => {
    const [n, setN] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            const newN = n - 1;
            console.log(newN);
            setN(newN);
            if (newN === 0) {
                clearInterval(timer);
            }
            return () => clearInterval(timer);
        }, 1000);
    }, []);
    return (
        <>
            <p>{n}</p>
            {/* <button onClick={() => setN(previous => previous + 1)}>n+1</button> */}
        </>
    );
};

export default UseEffect;
