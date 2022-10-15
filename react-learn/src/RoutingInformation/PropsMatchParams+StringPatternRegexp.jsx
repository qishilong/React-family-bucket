import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const A = props => {
    console.log(props.match);
    return (
        <>
            <p>组件A</p>
            <p>
                显示{props.match.params.year}年{props.match.params.month}月{props.match.params.day}
                日的新闻
            </p>
        </>
    );
};

const B = () => {
    return <>找不到页面</>;
};

const PropsMatchParamStringPattern = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact={true}
                    path="/news/:year(\d+)?/:month(\d+)?/:day(\d+)?/*"
                    component={A}
                />
                <Route component={B} />
            </Switch>
        </BrowserRouter>
    );
};

export default PropsMatchParamStringPattern;
