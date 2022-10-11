import PropTypes from "prop-types";
import { Component } from "react";

const types = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

class ChildA extends Component {
    static contextTypes = types;
    static childContextTypes = {
        a: PropTypes.number,
        c: PropTypes.string,
    };

    getChildContext() {
        return {
            a: 100,
            c: "101",
        };
    }
    render() {
        return (
            <>
                <h1>ChildA</h1>
                <h1>
                    a:{this.context.a}, b: {this.context.b}
                    <ChildB />
                </h1>
            </>
        );
    }
}

class ChildB extends Component {
    // 声明需要使用哪些上下文中的数据
    static contextTypes = {
        ...types,
        c: PropTypes.string,
    };
    render() {
        return (
            <>
                <p>
                    ChildB, 来自上下文中的数据: a: {this.context.a}, b:{this.context.b},c:
                    {this.context.c}
                </p>
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
