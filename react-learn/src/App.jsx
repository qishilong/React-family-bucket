import "./App.css";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import * as Pages from "./pages";
import TransitionRoute from "./TransitionRoute";

export default function App() {
    return (
        <div className="main">
            <Router>
                <Pages.NavBar></Pages.NavBar>
                <div className="page-container">
                    <TransitionRoute
                        path="/"
                        exact
                        component={Pages.Home}
                    />
                    <TransitionRoute
                        path="/news"
                        exact
                        component={Pages.News}
                    />
                    <TransitionRoute
                        path="/personal"
                        exact
                        component={Pages.Personal}
                    />
                </div>
            </Router>
        </div>
    );
}
