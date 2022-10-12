import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

/* import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />); */
document.addEventListener("click", function (e) {
    e.stopImmediatePropagation(); //阻止剩余的事件处理程序运行
});

document.addEventListener("click", function (e) {
    console.log("真实DOM：document 被点击了");
});