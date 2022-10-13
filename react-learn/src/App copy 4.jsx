import { Component } from "react";

import { getAllStudents } from "./services/fetchStudent";

const withAllStudents = Comp => {
    return class AllStudentsData extends Component {
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
            return (
                <Comp
                    {...this.props}
                    students={this.state.data}
                />
            );
        }
    };
};

const Test = props => {
    const studentList = props.students.map(item => <li key={item.id}>{item.name}</li>);
    return <ul>{studentList}</ul>;
};

const StudentList = withAllStudents(Test);

const App = () => {
    return <StudentList />;
};
export default App;
