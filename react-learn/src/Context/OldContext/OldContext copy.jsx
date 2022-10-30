import propType from "prop-types";
import { Component } from "react";

const types = {
    a: propType.number,
    b: propType.string.isRequired,
    onChange: propType.func,
};

const ChildA = (props, context) => {
    return (
        <>
            <h1>ChildA</h1>
            <h1>
                a:{context.a}, b: {context.b}
                <ChildB />
            </h1>
        </>
    );
};
ChildA.contextTypes = types;

class ChildB extends Component {
    // 声明需要使用哪些上下文中的数据
    static contextTypes = types;
    render() {
        return (
            <>
                <p>ChildB，来自上下文中的数据：{this.context.a}</p>
                <button onClick={() => this.context.onChange(this.context.a + 2)}>a+2</button>
            </>
        );
    }
}

class OldContext extends Component {
    // 约束上下文中数据类型
    static childContextTypes = types;
    state = {
        a: 10,
        b: "11",
    };

    // 得到上下文中数据
    getChildContext() {
        return {
            a: this.state.a,
            b: this.state.b,
            onChange: newA => {
                this.setState({ a: newA });
            },
        };
    }

    render() {
        return (
            <>
                <ChildA />
                <button onClick={() => this.setState({ a: this.state.a + 1 })}>a+1</button>
            </>
        );
    }
}
export default OldContext;
