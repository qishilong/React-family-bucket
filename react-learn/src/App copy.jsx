import React from "react";

import useGetAllStudent from "./HOOK/myHOOKs/useGetAllStudent";



const Show = () => {
    const students = useGetAllStudent();

    return (
        <ul>
            {students.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

const App = () => {
    return (
        <>
            <Show />
        </>
    );
};

export default App;
