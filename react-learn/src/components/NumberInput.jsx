import React, { Component } from "react";

class NumberInput extends Component {
    state = {
        value: "",
    };
    render() {
        return (
            <input
                type="text"
                value={this.state.value}
                onChange={e => {
                    let value = e.target.value;
                    value = value.replace(/\D/g, "");
                    this.setState({ value });
                }}
            />
        );
    }
}

export default NumberInput;
