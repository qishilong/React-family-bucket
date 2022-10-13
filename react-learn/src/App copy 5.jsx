import { Component } from "react";

import { getAllStudents } from "./services/fetchStudent";

class AllStudentsData extends Component {
    state = {
        data: [],
    };

    async componentDidMount() {
        const students = await getAllStudents();
        this.setState({
            data: students,
        });
    }
    render() {
        if (typeof this.props.render === "function") {
            return this.props.render(this.state.data);
        }
        return null;
    }
}

const Test = props => {
    const studentList = props.students.map(item => <li key={item.id}>{item.name}</li>);
    return <ul>{studentList}</ul>;
};

const App = () => {
    return <AllStudentsData render={students => <Test students={students} />} />;
};
export default App;
