import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/studentList.jsx";

const appkey = "demo13_1545210570249";

async function getStudnetsData() {
    const data = await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
        .then((resp) => resp.json())
        .then((resp) => resp.data);
    return data;
}

async function render() {
    ReactDOM.render("正在加载中...", document.getElementById("root"));
    const data = await getStudnetsData();
    ReactDOM.render(<StudentList stus={data} />, document.getElementById("root"));
}

render();
