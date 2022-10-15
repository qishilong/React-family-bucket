import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const A = () => {
    return <>组件A</>;
};
const B = () => {
    return <>组件B</>;
};

const C = () => {
    return <>组件C</>;
};

const App = () => {
    return (
        <BrowserRouter>
            <Route>
                <Route
                    path="/a"
                    component={A}
                />
                <Route
                    path="/b"
                    component={B}
                />
                <Route
                    path="/c"
                    component={C}
                />
            </Route>
        </BrowserRouter>
    );
};
export default App;
