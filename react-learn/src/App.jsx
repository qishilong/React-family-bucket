import { useLayoutEffect, useRef, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(0);
    const ref = useRef();

    useLayoutEffect(() => {
        ref.current.innerText = Math.random().toFixed(2);
    });

    return (
        <>
            <p ref={ref}>{number}</p>
            <button onClick={() => setNumber(previous => previous + 1)}>+1</button>
        </>
    );
};
export default App;
