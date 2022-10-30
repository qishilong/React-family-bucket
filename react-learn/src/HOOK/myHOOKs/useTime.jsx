import { useEffect } from "react";

const useTime = (func, duration) => {
    useEffect(() => {
        const timer = setInterval(func, duration);
        return () => clearInterval(timer);
    }, []);
    return <></>;
};

export default useTime;
