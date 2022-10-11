import { Component, createContext } from "react";

const context = createContext();

class ChildB extends Component {
    shouldComponentUpdate() {
        console.log("运行了优化");
        return false;
    }
    render() {
        console.log("childB render");
        return (
            <>
                a:{this.props.a}, b:{this.props.b}
            </>
        );
    }
}

class NewContext extends Component {
    state = {
        a: 123,
        b: "100",
        onChange: newA => {
            this.setState({ a: newA });
        },
    };
    render() {
        return (
            <>
                <ChildB {...this.state} />
                <button onClick={() => this.setState({ a: this.state.a + 1 })}>a+1</button>
            </>
        );
    }
}

export default NewContext;
