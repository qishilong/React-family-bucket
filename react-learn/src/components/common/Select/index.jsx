import React from "react";

import WithDataGroup from "../HOC/WithDataGroup";

class Option extends React.Component {
    render() {
        return <option value={this.props.info.value}>{this.props.info.text}</option>;
    }
}

const OptionGroup = WithDataGroup(Option);

class Select extends React.Component {
    render() {
        return (
            <select
                name={this.name}
                value={this.props.value}
                onChange={e => this.props.onChange && this.props.onChange(e.target.value)}
            >
                <OptionGroup {...this.props}></OptionGroup>
            </select>
        );
    }
}

export default Select;
