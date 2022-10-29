import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import store from "./store";
import history from "./store/history";

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route
                        path="/login"
                        component={Login}
                    />
                    <Route
                        path="/"
                        component={Admin}
                    />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
