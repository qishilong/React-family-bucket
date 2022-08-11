import React from "react";
import "./loading.css";

export default function Loading(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className="loading">
            <p>加载中...</p>
        </div>
    );
}
