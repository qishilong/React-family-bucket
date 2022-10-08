import React, { Component } from "react";

class RadioBoxGroup extends Component {
    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    };

    // 得到一组单选框
    getRadioBoxGroup() {
        // console.log(this.props.data);
        // console.log(this.props.chooseData);
        return this.props.data.map(item => (
            <label key={item.value}>
                <input
                    type="radio"
                    value={item.value}
                    name={this.props.name}
                    onChange={this.handleChange}
                    checked={this.props.value === item.value}
                />
                {item.text}
            </label>
        ));
    }
    render() {
        const RadioBoxGroupData = this.getRadioBoxGroup();
        return <>{RadioBoxGroupData}</>;
    }
}

export default RadioBoxGroup;
