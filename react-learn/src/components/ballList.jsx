/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-11 13:41:33
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-11 15:07:10
 * @FilePath: \React\react-learn\src\components\ballList.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import Ball from "./ball";
import getRandom from "../utils/getRandom";

export default class BallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayList: [],
        };

        const timer = setInterval(() => {
            let info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                speedX: getRandom(50, 500),
                speedY: getRandom(50, 500),
                bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`,
            };

            this.setState({
                arrayList: [...this.state.arrayList, info],
            });

            if (this.state.arrayList.length === 10) {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        const balls = this.state.arrayList.map((item, i) => <Ball key={i} {...item} />);
        return <>{balls}</>;
    }
}
