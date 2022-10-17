import { Component } from "react";

import Prompt from "./Prompt";

class Page2 extends Component {
    state = {
        value: "",
    };
    render() {
        return (
            <div>
                <Prompt
                    when={this.state.value !== ""}
                    message="切换页面会导致内容被清空，确定要切换吗？"
                />
                <textarea
                    value={this.state.value}
                    onChange={e => {
                        this.setState({ value: e.target.value });
                    }}
                ></textarea>
            </div>
        );
    }
}

export default Page2;
