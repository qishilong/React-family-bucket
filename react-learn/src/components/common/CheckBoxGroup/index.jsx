import React, { Component } from "react";

import WithDataGroup from "../HOC/WithDataGroup";

class CheckBoxGroup extends Component {
    handleChange = e => {
        let checkBoxArray;
        if (e.target.checked) {
            checkBoxArray = [...this.props.chooseData, e.target.value];
        } else {
            checkBoxArray = this.props.chooseData.filter(item => item !== e.target.value);
        }
        this.props.onChange && this.props.onChange(checkBoxArray);
    };

    render() {
        return (
            <>
                <label>
                    <input
                        type="checkbox"
                        value={this.props.info.value}
                        name={this.props.name}
                        onChange={this.handleChange}
                        checked={this.props.chooseData.includes(this.props.info.value)}
                    />
                    {this.props.info.text}
                </label>
            </>
        );
    }
}

export default WithDataGroup(CheckBoxGroup);
