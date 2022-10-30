import { Component } from "react";
import { Provider } from "./FormContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
class Form extends Component {
    state = {
        formData: {}, // form 中的数据对象
        changeFormData: (name, value) => {
            // 修改 form 中的数据对象
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: value,
                },
            });
        },
        onSubmit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        },
    };
    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

export default Form;
Form.Input = FormInput;
Form.Button = FormButton;
