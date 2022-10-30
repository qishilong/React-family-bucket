import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const A = props => {
    console.log(props.match);
    return (
        <>
            <p>组件A</p>
        </>
    );
};

const B = () => {
    return <>找不到页面</>;
};

const PropsMatch = () => {
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

export default PropsMatch;
