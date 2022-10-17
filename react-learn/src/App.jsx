import "./App.less";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Link from "./BetterLink";
import RootRouter from "./rootRouter";

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to={{ name: "home" }}>首页</Link>
                <Link to={{ name: "news" }}>新闻页</Link>
            </nav>
            <div>
                {/* 匹配网站的顶级页面 */}
                <RootRouter />
            </div>
        </BrowserRouter>
    );
};

export default App;
