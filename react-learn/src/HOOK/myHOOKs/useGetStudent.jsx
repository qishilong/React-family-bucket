import { useEffect, useState } from "react";

import { getStudents } from "../../services/fetchStudent";

const useGetStudent = (page = 1, limit = 10) => {
    const [studentData, setStudentData] = useState();
    useEffect(() => {
        (async () => {
            const resp = await getStudents(page, limit);
            setStudentData(provinous => (provinous = resp));
        })();
    }, [page, limit]);
    return studentData;
};

export default useGetStudent;
