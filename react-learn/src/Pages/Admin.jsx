import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import CourseAdd from "./Course/CourseAdd";
import CourseList from "./Course/CourseList";
import StudentAdd from "./Student/StudentAdd";
import StudentDetail from "./Student/StudentDetail";
import StudentList from "./Student/StudentList";
import Welcome from "./Welcome";

const Admin = () => {
    return (
        <div>
            <Layout
                header={<Header />}
                aside={<Menu />}
            >
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={Welcome}
                    />
                    <Route
                        path="/students"
                        exact
                        component={StudentList}
                    />
                    <Route
                        path="/students/add"
                        exact
                        component={StudentAdd}
                    />
                    <Route
                        path="/students/:sno"
                        exact
                        component={StudentDetail}
                    />
                    <Route
                        path="/courses"
                        exact
                        component={CourseList}
                    />
                    <Route
                        path="/courses/add"
                        exact
                        component={CourseAdd}
                    />
                </Switch>
            </Layout>
        </div>
    );
};

export default Admin;
