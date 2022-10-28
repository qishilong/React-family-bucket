import React from "react";
import { Provider } from "react-redux";

import StudentSearch from "./components/StudentSearch";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <StudentSearch />
        </Provider>
    );
};

export default App;
