/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-11 13:41:19
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-11 14:27:42
 * @FilePath: \React\react-learn\src\components\ball.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import "./ball.css";

export default class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            speedX: props.speedX,
            speedY: props.speedY,
        };

        const duration = 16; // 间隔的毫秒数

        setInterval(() => {
            const xDis = (this.state.speedX * duration) / 1000;
            const yDis = (this.state.speedY * duration) / 1000;
            // 根据速度，改变 left 和 top 的值
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;

            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    speedX: -this.state.speedX,
                });
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    speedX: -this.state.speedX,
                });
            }

            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    speedY: -this.state.speedY,
                });
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    speedY: -this.state.speedY,
                });
            }

            this.setState({
                left: newLeft,
                top: newTop,
            });
        }, duration);
    }

    render() {
        return <div className="ball" style={{ left: this.state.left, top: this.state.top, background: this.props.bg || "#f40" }}></div>;
    }
}
