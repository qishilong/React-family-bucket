import "./index.less";

import React, { Component } from "react";

class DotSwitch extends Component {
    render() {
        const spans = [];
        for (let i = 0; i < this.props.total; i++) {
            spans.push(
                <span
                    key={i}
                    className={i === this.props.currentIndex ? "active" : ""}
                    onClick={() => this.props.onChange && this.props.onChange(i)}
                ></span>,
            );
        }
        return <div className="dots">{spans}</div>;
    }
}

export default DotSwitch;
