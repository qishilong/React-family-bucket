import React, { Component } from "react";

export class A extends Component {
    // 不再关注与该组件不相关的事
    render() {
        return <h1>{this.props.a}</h1>;
    }
}
