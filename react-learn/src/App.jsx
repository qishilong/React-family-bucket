import React, { Component } from "react";

import { A, B } from "./components/Comp";
import WithLog from "./HOC/WithLog";
import WithLogin from "./HOC/WithLogin";

let AComp = WithLogin(WithLog(A, "abc"));
let BComp = WithLogin(WithLog(B, "abc"));
class App extends Component {
    render() {
        return (
            <>
                <AComp
                    isLogin={true}
                    a={1}
                />
                <BComp
                    isLogin={true}
                    b={2}
                />
                <button
                    onClick={() => {
                        this.setState({});
                    }}
                >
                    点击
                </button>
            </>
        );
    }
}

export default App;
