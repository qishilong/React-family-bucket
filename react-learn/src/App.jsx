import React from "react";
import { Provider } from "react-redux";

import StudentSearch from "./components/StudentSearch";
import store from "./store";

// import { Provider } from "./react-redux";
const App = () => {
    return (
        <Provider store={store}>
            <StudentSearch />
        </Provider>
    );
};

export default App;
