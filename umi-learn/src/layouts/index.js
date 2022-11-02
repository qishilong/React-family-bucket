import React from "react";

import Aside from "../components/Aside";
import MenuContainer from "../components/containers/MenuContainer";
import Layout from "../components/Layout";
import styles from "./index.css";

export default function index(props) {
    if (props.location.pathname === "/login") {
        //登录页
        return props.children;
    } else {
        return (
            <Layout
                header={<MenuContainer />}
                aside={<Aside />}
                main={<div className={styles.main}>{props.children}</div>}
            />
        );
    }
}
