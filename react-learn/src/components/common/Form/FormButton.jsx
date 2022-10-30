import React from "react";
import { Consumer } from "./FormContext";

const FormButton = props => {
    return (
        <Consumer>
            {value => <button onClick={() => value.onSubmit()}>{props.children}</button>}
        </Consumer>
    );
};

export default FormButton;
