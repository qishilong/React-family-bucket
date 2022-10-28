import React, { Component } from "react";

import store from "../../store";
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

const mapStateToProps = state => {
    return {
        number: state.counter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAsyncIncrease() {
            dispatch(asyncIncrease());
        },
        onAsyncDecrease() {
            dispatch(asyncDecrease());
        },
        onIncrease() {
            dispatch(increase());
        },
        onDecrease() {
            dispatch(decrease());
        },
    };
};

// 容器组件
export default class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
        console.log(this.state);
        store.subscribe(() => {
            this.setState(mapStateToProps(store.getState()));
            console.log(store.getState());
        });
    }

    render() {
        const evenHandle = mapDispatchToProps(store.dispatch);
        return (
            <Counter
                {...this.state}
                {...evenHandle}
            ></Counter>
        );
    }
}
