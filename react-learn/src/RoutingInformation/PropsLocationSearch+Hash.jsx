import qs from "query-string";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const A = props => {
    console.log(props.location);
    const quary = qs.parse(props.location.search);
    const hash = qs.parse(props.location.hash);
    return (
        <>
            <p>组件A</p>
            <p>访问地址:{props.location.pathname}</p>
            <p>
                地址参数: a:{quary.a} b:{quary.b} c:{quary.c}
            </p>
            <p>
                hash: d:{hash.d} f:{hash.f}
            </p>
        </>
    );
};

const B = () => {
    return <>找不到页面</>;
};

const PropsLocationSearchHash = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact={true}
                    path="/a"
                    component={A}
                />
                <Route component={B} />
            </Switch>
        </BrowserRouter>
    );
};

export default PropsLocationSearchHash;
