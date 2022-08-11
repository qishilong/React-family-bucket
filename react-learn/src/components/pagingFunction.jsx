/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-11 15:44:02
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-11 20:01:31
 * @FilePath: \React\react-learn\src\components\pagingFunction.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "./pagingFunction.css";

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
export default function PagingFunction(props) {
    const pageNumber = getPageNumber(props); // 总页数
    const min = getMinNumber(props);
    const max = getMaxNumber(min, pageNumber, props);
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(
            <span className={i === props.current ? "item active" : "item"} onClick={() => toPage(i, props)} key={i}>
                {i}
            </span>
        );
    }
    return (
        <>
            <span onClick={() => toPage(1, props)} className={props.current === 1 ? "item disabled" : "item"}>
                首页
            </span>
            <span onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)} className={props.current === 1 ? "item disabled" : "item"}>
                上一页
            </span>
            {numbers}
            <span
                onClick={() => toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)}
                className={props.current === pageNumber ? "item disabled" : "item"}
            >
                下一页
            </span>
            <span onClick={() => toPage(pageNumber, props)} className={props.current === pageNumber ? "item disabled" : "item"}>
                尾页
            </span>
        </>
    );
}

/**
 * 跳转到某一页
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target, props) {
    if (!props.current === target) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
}

// 计算总页数
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);
}

// 计算最小数
function getMinNumber(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
}

// 计算最大数
function getMaxNumber(min, pageNumber, props) {
    let max = min + props.panelNumber - 1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    return max;
}
