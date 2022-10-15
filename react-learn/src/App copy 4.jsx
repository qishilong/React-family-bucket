import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const A = () => {
    return <>组件A</>;
};

const B = () => {
    return <>组件B</>;
};

// 任意路径
const C = () => {
    return (
        <>
            404 Not Found
            <Route
                exact
                path="abc"
                component={D}
            />
        </>
    );
};

const D = () => {
    return <>组件D</>;
};

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/a"
                    component={A}
                />
                <Route
                    path="/a/b"
                    component={B}
                />
                <Route component={C} />
            </Switch>
        </BrowserRouter>
    );
};
export default App;
