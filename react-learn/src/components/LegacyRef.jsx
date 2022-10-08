import React, { Component } from "react";

class A extends React.Component {
    method() {
        console.log("调用了 Ref 方法");
    }
    render() {
        return <h1>组件A</h1>;
    }
}

class LegacyRef extends Component {
    handClick = () => {
        console.log(this);
        this.refs.refInput.focus();
        this.refs.compA.method();
    };
    render() {
        return (
            <>
                <input
                    ref="refInput"
                    type="text"
                />
                <A ref="compA" />
                <button onClick={this.handClick}>聚焦</button>
            </>
        );
    }
}

export default LegacyRef;
