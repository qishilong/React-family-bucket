import { NavLink, Route, routerRedux, Switch } from "dva/router";
import React from "react";

import Counter from "./Counter";

//routerRedux: 里面包含了所有connected-react-router的东西
function Home() {
    return <h1>首页</h1>;
}

function routerConfig({ history }) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">计数器</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route
                            path="/counter"
                            component={Counter}
                        />
                        <Route
                            path="/"
                            component={Home}
                        />
                    </Switch>
                </div>
            </div>
        </routerRedux.ConnectedRouter>
    );
}

export default routerConfig;
