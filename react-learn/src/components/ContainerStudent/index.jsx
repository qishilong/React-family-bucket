import React, { useEffect, useState } from "react";

import { getStudents } from "../../services/fetchStudent";
import Pager from "../common/Pager";
import ListStudent from "../ListStudent";

/*
    用于提供数据
*/
const ContainerStudent = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const [panelNumber, setPanelNumber] = useState(5);

    useEffect(() => {
        (async () => {
            const studentsData = await getStudents(page, limit);
            setData(previous => (previous = studentsData.findByPage));
            setTotal(previous => (previous = studentsData.cont));
        })();
    }, [page, limit]);
    return (
        <>
            <ListStudent data={data} />
            <Pager
                current={page}
                total={total}
                limit={limit}
                panelNumber={panelNumber}
                onPageChange={newPage => setPage(previous => (previous = newPage))}
            />
            <p>
                每页显示的条数:
                <input
                    type="number"
                    value={limit}
                    onChange={e => setLimit(previous => (previous = e.target.value))}
                />
            </p>
            <p>
                最多显示的数字页码:
                <input
                    type="number"
                    value={panelNumber}
                    onChange={e => setPanelNumber(previous => (previous = e.target.value))}
                />
            </p>
        </>
    );
};

export default ContainerStudent;
