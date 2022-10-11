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
    render() {
        return (
            <context.Consumer>
                {value => (
                    <p>
                        a:{value.a},b:{value.b}
                        <button onClick={() => value.onChange(value.a + 2)}>a+2</button>
                    </p>
                )}
            </context.Consumer>
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
