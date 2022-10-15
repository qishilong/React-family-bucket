import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const A = () => {
    return <>组件A</>;
};
const B = () => {
    return <>组件B</>;
};

const C = () => {
    return <>404 Not Found</>;
};

const App = () => {
    return (
        <BrowserRouter>
            <Route>
                <Route
                    exact
                    path="/a"
                    component={A}
                />
                <Route
                    exact
                    path="/a/b"
                    component={B}
                />
                <Route component={C} />
            </Route>
        </BrowserRouter>
    );
};
export default App;
