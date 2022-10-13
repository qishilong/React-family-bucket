import { useEffect, useRef, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(10);
    const timerRef = useRef(number);

    useEffect(() => {
        const timer = setInterval(() => {
            timerRef.current--;
            setNumber(previous => (previous = timerRef.current));
            // console.log(number); 10
            // console.log(timerRef.current); 9-0
            if (timerRef.current === 0) {
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return <>{number}</>;
};
export default App;
