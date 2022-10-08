import React, { Component } from "react";

class CheckBoxGroup extends Component {
    handleChange = e => {
        let checkBoxArray;
        if (e.target.checked) {
            checkBoxArray = [...this.props.chooseData, e.target.value];
        } else {
            checkBoxArray = this.props.chooseData.filter(item => item !== e.target.value);
        }
        this.props.onChange && this.props.onChange(checkBoxArray, this.props.name, e);
    };

    // 得到一组多选框
    getCheckBoxGroup() {
        // console.log(this.props.data);
        // console.log(this.props.chooseData);
        return this.props.data.map(item => (
            <label key={item.value}>
                <input
                    type="checkbox"
                    value={item.value}
                    name={this.props.name}
                    onChange={this.handleChange}
                    checked={this.props.chooseData.includes(item.value)}
                />
                {item.text}
            </label>
        ));
    }
    render() {
        const checkBoxGroupData = this.getCheckBoxGroup();
        return <>{checkBoxGroupData}</>;
    }
}

export default CheckBoxGroup;
