import React from "react";
import { Provider } from "react-redux";

import Counter from "../src/components/React-redux/Counter";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <Counter abc={"abc"} />
        </Provider>
    );
};

export default App;
