import { Component } from "react";

import resetScroll from "./resetScroll";

const withScroll = Comp => {
    return class ScrollWrapper extends Component {
        componentDidMount() {
            resetScroll();
        }
        render() {
            return <Comp {...this.props} />;
        }
    };
};

export default withScroll;
