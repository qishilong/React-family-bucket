import React, { Component } from "react";

class SelectGroup extends Component {
    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    };

    // 得到一组单选框
    getOption() {
        // console.log(this.props.data);
        // console.log(this.props.chooseData);
        return this.props.data.map(item => (
            <option
                key={item.value}
                value={item.value}
            >
                {item.text}
            </option>
        ));
    }
    render() {
        const OptionData = this.getOption();
        return (
            <select
                name={this.props.value}
                value={this.props.value}
                onChange={this.handleChange}
            >
                {OptionData}
            </select>
        );
    }
}

export default SelectGroup;
