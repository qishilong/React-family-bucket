import { PureComponent, useState } from "react";

class Pure extends PureComponent {
    render() {
        console.log("Pure Render");
        return (
            <div>
                <p>{this.props.text}</p>
                <button onClick={this.props.onClick}>改变文本</button>
            </div>
        );
    }
}

const Parent = () => {
    console.log("Parent Render");
    const [n, setN] = useState(0);
    const [text, setText] = useState(1);
    return (
        <>
            {/* react 每次都会使用 Object.is（浅比较） 方法进行比较前后数据的引用是否相同，来决定是否重新渲染组件*/}
            {/* 函数的地址每次渲染都发生了改变，导致子组件跟着渲染，若子组件是经过优化的组件，则可能导致子组件优化失效 */}
            <Pure
                text={text}
                onClick={() => setText(previous => (previous = Math.random()))}
            />
            <input
                type="number"
                value={n}
                onChange={e => setN(previous => (previous = parseInt(e.target.value)))}
            />
        </>
    );
};

const App = () => {
    return (
        <>
            <Parent />
        </>
    );
};

export default App;
