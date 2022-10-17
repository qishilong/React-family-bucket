import { Component } from "react";
import { withRouter } from "react-router-dom";

class Prompt extends Component {
    static defaultProps = {
        when: false,
        message: "",
    };

    componentDidMount() {
        this.handleBlock();
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleBlock();
    }

    handleBlock = () => {
        if (this.props.when) {
            this.unBlock = this.props.history.block(this.props.message);
        } else {
            if (this.unBlock) {
                this.unBlock();
            }
        }
    };

    componentWillUnmount() {
        if (this.unBlock) {
            this.unBlock();
        }
    }
    render() {
        return null;
    }
}

export default withRouter(Prompt);
