import { createContext, useContext } from "react";

const context1 = createContext();

const Test = () => {
    const context = useContext(context1);
    return (
        <>
            <p>{context}</p>
            {/* <context1.Consumer>{value => <p>{value}</p>}</context1.Consumer> */}
        </>
    );
};

const App = () => {
    return (
        <context1.Provider value="a">
            <Test />
        </context1.Provider>
    );
};

export default App;
