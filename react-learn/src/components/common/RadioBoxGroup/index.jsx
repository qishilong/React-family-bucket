import React, { Component } from "react";

import WithDataGroup from "../HOC/WithDataGroup";

class RadioBoxGroup extends Component {
    render() {
        return (
            <>
                <label key={this.props.info.value}>
                    <input
                        type="radio"
                        value={this.props.info.value}
                        name={this.props.name}
                        onChange={() =>
                            this.props.onChange && this.props.onChange(this.props.info.value)
                        }
                        checked={this.props.value === this.props.info.value}
                    />
                    {this.props.info.text}
                </label>
            </>
        );
    }
}

export default WithDataGroup(RadioBoxGroup);
