import React from "react";

/*
    学生展示组件，纯展示组件，没有状态，从属性中获取数据，然后展示
*/
const ListStudent = ({ data }) => {
    const list = data.map(item => (
        <li key={item.id}>
            {item.name},{item.sex === 1 ? "男" : "女"}
        </li>
    ));
    return <ul>{list}</ul>;
};

export default ListStudent;
