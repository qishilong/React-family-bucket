import { useReducer } from "react";

// import useReducer from "./HOOK/myHOOKs/useReducer";
const App = () => {
    const reducer = (state, actions) => {
        switch (actions.type) {
            case "add":
                return state + 1;
            case "detele":
                if (state === 0) {
                    return 0;
                }
                return state - 1;
            default:
                return state;
        }
    };

    const [n, dispatch] = useReducer(reducer, 10, init => {
        return 100;
    });
    return (
        <>
            <button onClick={() => dispatch({ type: "detele" })}>-</button>
            <p>{n}</p>
            <button onClick={() => dispatch({ type: "add" })}>+</button>
        </>
    );
};

export default App;
