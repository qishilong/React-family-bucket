import { useState } from "react";

import useGetStudent from "./HOOK/myHOOKs/useGetStudent";

const Page = () => {
    const [page, setPage] = useState(1);
    const students = useGetStudent(page, 10);

    return (
        <>
            <ul>
                {students && students.findByPage.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <p>
                <input
                    type="number"
                    value={page}
                    onChange={e => setPage(e.target.value)}
                />
            </p>
        </>
    );
};

const App = () => {
    return (
        <>
            <Page />
        </>
    );
};

export default App;
