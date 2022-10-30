import React, { Component } from "react";

import RadioBoxGroup from ".";
import { fetchStudentData } from "../../../services/fetchStudent";

class Test extends Component {
    state = {
        data: [],
        // chooseData: [],
        value: "",
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
                <RadioBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={item => {
                        this.setState({ value: item });
                    }}
                />
            </>
        );
    }
}

export default Test;
