import React, { Component } from "react";

const A = (props, ref) => {
    return <h1 ref={ref}>{props.word}</h1>;
};

// 传递函数组件 A，得到一个新的组件 NewA
const NewA = React.forwardRef(A);

class FunComponent extends Component {
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

export default FunComponent;
