import { useEffect, useState } from "react";

import { getAllStudents } from "../../services/fetchStudent";

const useGetAllStudent = () => {
    const [studentData, setStudentData] = useState([]);
    useEffect(() => {
        (async () => {
            const allStudents = await getAllStudents();
            setStudentData(allStudents);
        })();
    }, []);
    return studentData;
};

export default useGetAllStudent;
