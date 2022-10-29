import { useEffect } from "react";

import { connect } from "../react-redux";
import store from "../store";
import { change as changeCondition } from "../store/action/student/searchCondition";
import { fetchStudents } from "../store/action/student/searchResult";
import Pager from "./common/Pager";
import Loading from "./Loading";
import StudentTableList from "./StudentTableList";
import StudentTableSearchTop from "./StudentTableSearchTop";

// import { connect } from "react-redux";
let mapStateToProps = state => ({
    defaultProps: {
        key: state.students.condition.key,
        sex: state.students.condition.sex,
    },
});

let mapDispatchToProps = dispatch => ({
    onSearch: newCondition => {
        // 将条件中的页码回归到1
        newCondition.page = 1;
        // 根据新的查询条件查询
        dispatch(changeCondition(newCondition));
        // 触发获取学生数据的 action
        dispatch(fetchStudents());
    },
});

const SearchTop = connect(mapStateToProps, mapDispatchToProps)(StudentTableSearchTop);

mapStateToProps = state => ({
    data: state.students.result.data,
});
const StudentTable = connect(mapStateToProps, mapDispatchToProps)(StudentTableList);

mapStateToProps = state => ({
    current: state.students.condition.page,
    total: state.students.result.total,
    limit: state.students.condition.limit,
    panelNumber: 5,
});

mapDispatchToProps = dispatch => ({
    onPageChange: newPage => {
        dispatch(changeCondition({ page: newPage }));
        dispatch(fetchStudents());
    },
});

const PageTable = connect(mapStateToProps, mapDispatchToProps)(Pager);

mapStateToProps = state => ({
    show: state.students.result.isLoading,
});

const IsLoading = connect(mapStateToProps, mapDispatchToProps)(Loading);

const StudentSearch = () => {
    useEffect(() => {
        store.dispatch(fetchStudents());
    });

    return (
        <div>
            <SearchTop />
            <StudentTable />
            <PageTable />
            <IsLoading />
        </div>
    );
};

export default StudentSearch;
