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
                a:{this.props.a}, b:{this.props.b}
            </>
        );
    }
}

class NewContext extends Component {
    data = [
        {
            a: 123,
            b: "100",
            onChange: newA => {
                this.setState({ a: newA });
            },
        },
    ];

    state = this.data[0];
    render() {
        return (
            <context.Provider value={{ ...this.state }}>
                <>
                    <ChildB {...this.state} />
                    <button
                        onClick={() =>
                            this.setState({}, () => {
                                this.data.push(this.state);
                                console.log(this.data[0] === this.data[1]);
                            })
                        }
                    >
                        a+1
                    </button>
                </>
            </context.Provider>
        );
    }
}

export default NewContext;
