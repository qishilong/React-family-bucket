import "./index.less";

import React from "react";

const StudentTableList = props => {
    const list = props.data.map(item => (
        <tr key={item.id}>
            <td>{item.sNo}</td>
            <td>{item.name}</td>
            <td>{item.sex === 1 ? "女" : "男"}</td>
            <td>{item.birth}</td>
            <td>{item.email}</td>
            <td>
                <a href={`/students/${item.sNo}`}>操作</a>
            </td>
        </tr>
    ));

    return (
        <table className="tab">
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>出生年月</th>
                    <th>邮箱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>{list}</tbody>
        </table>
    );
};

export default StudentTableList;
