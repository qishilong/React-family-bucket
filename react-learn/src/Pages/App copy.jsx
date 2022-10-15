import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "./Admin";
import Login from "./Login";

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
