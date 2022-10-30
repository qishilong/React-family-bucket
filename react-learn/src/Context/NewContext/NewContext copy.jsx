import { Component, createContext } from "react";

const context = createContext();

const ChildA = () => {
    return (
        <>
            <h1>ChildA</h1>
            <context.Consumer>
                {value => (
                    <>
                        a:{value.a}, b:{value.b}
                    </>
                )}
            </context.Consumer>
            <ChildB />
        </>
    );
};

class ChildB extends Component {
    static contextType = context;
    render() {
        return (
            <>
                <h1>
                    a:{this.context.a},b:{this.context.b}
                </h1>
                <button onClick={() => this.context.onChange(this.context.a + 2)}>a+2</button>
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
            <context.Provider value={this.state}>
                <ChildA />
                <button onClick={() => this.setState({ a: this.state.a + 1 })}>a+1</button>
            </context.Provider>
        );
    }
}

export default NewContext;
