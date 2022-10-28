import React from "react";
import { connect } from "react-redux";

import { asyncDecrease, asyncIncrease, decrease, increase } from "../../store/action/counter";

// 展示组件
const Counter = props => {
    return (
        <>
            <h1>{props.number}</h1>
            <div>
                <button onClick={props.onAsyncIncrease}>异步加</button>
                <button onClick={props.onAsyncDecrease}>异步减</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onDecrease}>减</button>
            </div>
        </>
    );
};

const mapStateToProps = (state, oweProps) => {
    console.log(oweProps);
    return {
        number: state.counter,
    };
};

const mapDispatchToProps = {
    onAsyncIncrease: asyncIncrease,
    onAsyncDecrease: asyncDecrease,
    onIncrease: increase,
    onDecrease: decrease,
};

// // connect 返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps);

// // 传入展示组件，返回容器组件
// export default hoc(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
