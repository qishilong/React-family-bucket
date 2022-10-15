import "./index.less";

import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <h1>学生管理系统</h1>
            </div>
            <div className="right">
                <span>用户名</span>
                <button>退出</button>
            </div>
        </div>
    );
};

export default Header;
