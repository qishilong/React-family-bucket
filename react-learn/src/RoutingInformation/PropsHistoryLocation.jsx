import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const A = props => {
    return (
        <>
            <p>组件A</p>
            <button
                onClick={() => {
                    props.history.push("/b", "状态数据");
                }}
            >
                跳转到B
            </button>
        </>
    );
};

const B = props => {
    return (
        <>
            <p>组件B</p>
            <p>获取状态数据: {props.history.location.state}</p>
            <button
                onClick={() => {
                    props.history.push("/a");
                }}
            >
                跳转到A
            </button>
        </>
    );
};

const C = () => {
    return <>找不到页面</>;
};

const PropsHistoryLocation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/a"
                    component={A}
                />
                <Route
                    path="/b"
                    component={B}
                />
                <Route component={C} />
            </Switch>
        </BrowserRouter>
    );
};

export default PropsHistoryLocation;
