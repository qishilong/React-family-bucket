import React, { Component } from "react";

import WithRefs from "../components/common/HOC/WithRefs";
import { A } from "../components/HOCComp";

let AComp = WithRefs(A);

class HOCComponent extends Component {
    ref = React.createRef();
    componentDidMount() {
        console.log(this.ref);
    }
    render() {
        return (
            <AComp
                ref={this.ref}
                a={1}
            />
        );
    }
}
export default HOCComponent;
