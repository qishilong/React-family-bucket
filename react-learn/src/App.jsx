import "./App.css";

import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

const App = () => {
    return (
        <BrowserRouter>
            <div className="nav">
                <NavLink to="/page1">页面1</NavLink>
                <NavLink to="/page2">页面2</NavLink>
            </div>
            <div className="container">
                <Route
                    path="/page1"
                    component={Page1}
                />
                <Route
                    path="/page2"
                    component={Page2}
                />
            </div>
        </BrowserRouter>
    );
};

export default App;
