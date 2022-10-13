import { useRef, useState } from "react";

window.arr = [];

const App = () => {
    const [number, setNumber] = useState(0);
    const inputRef = useRef();
    window.arr.push(inputRef);
    // console.log(window.arr);
    // window.arr[0]===window.arr[1] true
    return (
        <>
            <input
                ref={inputRef}
                type="text"
            />
            <button onClick={() => console.log(inputRef.current.value)}>获得input的内容</button>
            <input
                value={number}
                onChange={e => setNumber(previous => (previous = e.target.value))}
            />
        </>
    );
};
export default App;
