import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "./Pages/Admin";
import Login from "./Pages/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact={true}
                    path="/login"
                    component={Login}
                />
                <Route
                    path="/"
                    component={Admin}
                />
            </Switch>
        </BrowserRouter>
    );
};
export default App;
