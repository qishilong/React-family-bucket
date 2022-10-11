import { Component } from "react";
import context from "./FormContext";

class FormInput extends Component {
    static contextType = context;
    static defaultProps = {
        type: "text",
    };
    render() {
        return (
            <input
                value={this.context.formData[this.props.name] || ""}
                onChange={e => this.context.changeFormData(this.props.name, e.target.value)}
                type={this.context.type}
            ></input>
        );
    }
}

export default FormInput;
