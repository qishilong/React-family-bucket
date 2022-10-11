import { Component, createContext } from "react";

const context = createContext();

class ChildB extends Component {
    static contextType = context;
    shouldComponentUpdate() {
        console.log("运行了优化");
        return false;
    }
    render() {
        console.log("childB render");
        return (
            <>
                a:{this.context.a}, b:{this.context.b}
                {/* <button onClick={() => this.context.onChange(this.context.a + 1)}>+1</button> */}
            </>
        );
    }
}

class NewContext extends Component {
    state = {
        // contextData里面的值通过 setState 更改后不能更新到contextData里面，或者说contextData里面的值不能通过setState更改
        contextData: {
            a: 123,
            b: "100",
            onChange: newA => {
                this.setState({ a: newA });
            },
        },
    };

    render() {
        return (
            <context.Provider value={this.state.contextData}>
                <>
                    <ChildB />
                    <button
                        onClick={() => this.setState({ a: this.state.contextData.a + 1 })}
                        // onMouseDown={() => console.log(this.state.contextData.a)}
                    >
                        a+1
                    </button>
                </>
            </context.Provider>
        );
    }
}

export default NewContext;
