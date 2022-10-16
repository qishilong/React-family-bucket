import qs from "query-string";
import React, { useEffect, useState } from "react";

import Pager from "../../components/common/Pager";
import StudentTableList from "../../components/StudentTableList";
import StudentTableSearchTop from "../../components/StudentTableSearchTop";
import { searchStudents } from "../../services/fetchStudent";

const useResp = query => {
    const [data, setData] = useState({
        cont: 0,
        data: [],
    });
    useEffect(() => {
        searchStudents({
            page: query.page,
            limit: query.limit,
            sex: query.sex,
            key: query.key,
        }).then(resp => setData(resp));
    }, [query.page, query.limit, query.sex, query.key]);

    return data;
};

const getQuery = search => {
    const defaultQuery = {
        page: 1,
        limit: 10,
        sex: -1,
        key: "",
    };
    let query = qs.parse(search);
    query = Object.assign({}, defaultQuery, query);
    query.limit = +query.limit;
    query.sex = +query.sex;
    query.page = +query.page;
    return query;
};

const changeLocation = (newQuery, history) => {
    const search = qs.stringify(newQuery);
    history.push("?" + search);
};

const StudentList = props => {
    const query = getQuery(props.location.search);
    const data = useResp(query);
    return (
        <div>
            <StudentTableSearchTop
                defaultProps={{ key: query.key, sex: query.sex }}
                onSearch={value => {
                    const newQuery = {
                        ...query,
                        key: value.key,
                        sex: value.sex,
                    };
                    changeLocation(newQuery, props.history);
                }}
            />
            <StudentTableList data={data.data} />
            <Pager
                current={query.page}
                total={data.cont}
                limit={query.limit}
                panelNumber={5}
                onPageChange={newPage => {
                    const newQuery = {
                        ...query,
                        page: newPage,
                    };
                    changeLocation(newQuery, props.history);
                }}
            />
        </div>
    );
};

export default StudentList;
