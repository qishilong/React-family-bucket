import { forwardRef, useImperativeHandle, useRef } from "react";

const Test = (props, ref) => {
    useImperativeHandle(
        ref,
        () => {
            return {
                method() {
                    console.log("method");
                },
            };
        },
        [],
    );

    return <p>Test Component</p>;
};

const TestWrapper = forwardRef(Test);

const App = () => {
    const testRef = useRef();
    return (
        <>
            <TestWrapper ref={testRef} />
            <button onClick={() => testRef.current.method()}>获取Test组件的method方法</button>
        </>
    );
};
export default App;
