import React from "react";
import "./index.css";

export default function Layout(props) {
    let defaultDatas = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800,
        margin: 0,
    };

    let datas = Object.assign({}, defaultDatas, props);

    return (
        <div className="three-layout">
            <div
                className="left"
                style={{
                    width: datas.leftWidth,
                    marginRight: datas.margin,
                }}
            >
                {props.left}
            </div>
            <div
                className="min"
                style={{
                    width: datas.leftWidth,
                }}
            >
                {props.children}
            </div>
            <div
                className="right"
                style={{
                    width: datas.leftWidth,
                    marginLeft: datas.margin,
                }}
            >
                {props.right}
            </div>
        </div>
    );
}
