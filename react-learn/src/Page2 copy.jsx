import { Component } from "react";

class Page2 extends Component {
    state = {
        value: "",
    };

    handleBlock = value => {
        if (value) {
            this.unBlock = this.props.history.block("切换页面会导致内容被清空，确定要切换吗？");
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
        return (
            <div>
                <textarea
                    value={this.state.value}
                    onChange={e => {
                        this.setState({ value: e.target.value });
                        this.handleBlock(e.target.value);
                    }}
                ></textarea>
            </div>
        );
    }
}

export default Page2;
