import { Component, useRef } from "react";

class Test extends Component {
    methods() {
        console.log("mothods 调用");
    }
    render() {
        return <p>Test Component</p>;
    }
}

const App = () => {
    const testRef = useRef();
    return (
        <>
            <Test ref={testRef} />
            <button onClick={() => testRef.current.methods()}>获取Test组件的method方法</button>
        </>
    );
};
export default App;
