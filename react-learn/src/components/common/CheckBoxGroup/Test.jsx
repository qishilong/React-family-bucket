import React, { Component } from "react";

import CheckBoxGroup from ".";
import { fetchStudentData } from "../../../services/fetchStudent";

class Test extends Component {
    state = {
        data: [],
        chooseData: [],
    };
    async componentDidMount() {
        const studentData = await fetchStudentData();
        this.setState({
            data: studentData.map(item => ({ value: item.id.toString(), text: item.name })),
        });
    }
    render() {
        return (
            <>
                <CheckBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={checkBoxArray => {
                        this.setState({ chooseData: checkBoxArray });
                    }}
                />
            </>
        );
    }
}

export default Test;
