import React, { Component } from "react";

import HOCComponent from "./refs/WithHOCComponent";

// import RefsClass from "./refs/WithClassComponent";

// import RefsFun from "./refs/WithFunComponent";
class App extends Component {
    render() {
        return (
            <>
                <HOCComponent />
            </>
        );
    }
}

export default App;
