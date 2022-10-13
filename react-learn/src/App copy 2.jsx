import { useEffect, useRef, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(10);
    const timerRef = useRef();

    useEffect(() => {
        if (number === 0) {
            return;
        }
        timerRef.current = setTimeout(() => {
            setNumber(previous => previous - 1);
            console.log(number);
        }, 1000);
        return () => clearTimeout(timerRef);
    }, [number]);

    return <>{number}</>;
};
export default App;
