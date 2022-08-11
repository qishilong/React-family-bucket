/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-11 09:34:23
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-11 09:52:28
 * @FilePath: \React\react-learn\src\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css";

const srcs = [src1, src2, src3];
const container = document.getElementById("root");

let index = 0;

let timer; //计时器

function render() {
    ReactDOM.render(<img src={srcs[index]} alt="" />, container);
}

function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % srcs.length;
        render();
    }, 2000);
}

function stop() {
    clearInterval(timer);
}

render();

start();
container.onmouseenter = function () {
    start();
};
container.onmouseleave = function () {
    stop();
};
