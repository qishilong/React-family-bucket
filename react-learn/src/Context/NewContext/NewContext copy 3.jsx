import { Component, createContext } from "react";

const context = createContext();
const context1 = createContext();

const ChildA = () => {
    return (
        <context1.Provider value={{ a: 4134123, b: "rqewrqwerqe" }}>
            <h1>ChildA</h1>
            <context.Consumer>
                {value => (
                    <>
                        a:{value.a}, b:{value.b}
                    </>
                )}
            </context.Consumer>
            <ChildB />
        </context1.Provider>
    );
};

class ChildB extends Component {
    render() {
        return (
            <context.Consumer>
                {value => (
                    <>
                        <p>
                            a:{value.a},b:{value.b}
                            <button onClick={() => value.onChange(value.a + 2)}>a+2</button>
                        </p>
                        <context1.Consumer>
                            {value => (
                                <p>
                                    来自context1的数据 a:{value.a},b:{value.b}
                                </p>
                            )}
                        </context1.Consumer>
                    </>
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
