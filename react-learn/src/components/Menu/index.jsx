import "./index.less";

import React from "react";

const Menu = () => {
    return (
        <ul className="menu">
            <li>
                <a href="/students">学生列表</a>
            </li>
            <li>
                <a href="/students/add">添加学生</a>
            </li>
            <li>
                <a href="/courses">课程列表</a>
            </li>
            <li>
                <a href="/courses/add">添加课程</a>
            </li>
        </ul>
    );
};

export default Menu;
