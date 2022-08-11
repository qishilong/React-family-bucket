/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-11 15:46:29
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-11 20:22:06
 * @FilePath: \React\react-learn\src\components\page.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import PagingFunction from "./pagingFunction";
import Loading from "./loading";
import Multiline from "./list";

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.fetchStudents();
    }

    state = {
        current: 1,
        total: 0,
        limit: 10,
        panelNumber: 5,
        students: [],
        loading: false,
    };

    async fetchStudents() {
        this.setState({
            loading: true,
        });
        const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
            .then((resp) => resp.json())
            .then((resp) => resp.data);
        this.setState({
            total: resp.cont,
            students: resp.findByPage,
            loading: false,
        });
    }

    handleChange = (newPage) => {
        this.setState({
            current: newPage,
        });
        this.fetchStudents();
    };

    render() {
        return (
            <div className="container">
                <Multiline stus={this.state.students} />
                <div>
                    <PagingFunction {...this.state} onPageChange={this.handleChange} />
                </div>
                <Loading show={this.state.loading} />
            </div>
        );
    }
}
