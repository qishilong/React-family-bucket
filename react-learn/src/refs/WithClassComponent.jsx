import React, { Component } from "react";

class A extends Component {
    render() {
        return (
            <h1 ref={this.props.refs}>
                组件A
                <span>{this.props.word}</span>
            </h1>
        );
    }
}

// 传递函数组件 A，得到一个新的组件 NewA
const NewA = React.forwardRef((props, ref) => {
    return (
        <A
            {...props}
            refs={ref}
        />
    );
});

class ClassComponent extends Component {
    ARef = React.createRef();
    componentDidMount() {
        console.log(this.ARef);
    }
    render() {
        return (
            <NewA
                ref={this.ARef}
                word="adfjaldksfjaldks;fj"
            ></NewA>
        );
    }
}

export default ClassComponent;
