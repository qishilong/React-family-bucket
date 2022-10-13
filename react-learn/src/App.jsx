import { useDebugValue, useEffect, useState } from "react";

const useTest = () => {
    const [student] = useState([]);
    useDebugValue("student");
    return student;
};

const App = () => {
    useState(0);
    useState("abc");
    useEffect(() => console.log("uesEffect"), []);
    useTest();
    return <></>;
};
export default App;
