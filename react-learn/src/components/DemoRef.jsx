import React, { Component } from "react";

class DemoRef extends Component {
    state = {
        isShow: true,
    };
    componentDidMount() {
        console.log("didMount", this.ref);
    }
    handleClick = () => {
        this.setState({ isShow: !this.state.isShow });
    };
    getRef = e => {
        console.log("函数被调用了", e);
        this.ref = e;
    };
    render() {
        return (
            <>
                {this.state.isShow && (
                    <input
                        ref={this.getRef}
                        type="text"
                    />
                )}
                <button onClick={this.handleClick}>显示/隐藏</button>
            </>
        );
    }
}

export default DemoRef;
