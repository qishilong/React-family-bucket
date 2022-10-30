import { Component } from "react";

class StudentTableSearchTop extends Component {
    constructor(props) {
        super(props);
        const value = {
            key: "",
            sex: -1,
        };
        this.state = Object.assign({}, value, this.props.defaultProps);
    }

    handleRadioChange = e => {
        this.setState({ sex: +e.target.value });
    };

    handleSearch = () => {
        // 抛出事件
        if (this.props.onSearch) {
            this.props.onSearch(this.state);
        }
    };

    render() {
        return (
            <div>
                <label>
                    关键字:
                    <input
                        type="text"
                        value={this.state.key}
                        onChange={e => {
                            this.setState({ key: e.target.value });
                        }}
                    />
                </label>
                性别:
                <label>
                    <input
                        type="radio"
                        checked={this.state.sex === 0}
                        value={0}
                        name="sex"
                        onChange={this.handleRadioChange}
                    />
                    男
                </label>
                <label>
                    <input
                        type="radio"
                        checked={this.state.sex === 1}
                        value={1}
                        name="sex"
                        onChange={this.handleRadioChange}
                    />
                    女
                </label>
                <label>
                    <input
                        type="radio"
                        checked={this.state.sex === -1}
                        value={-1}
                        name="sex"
                        onChange={this.handleRadioChange}
                    />
                    不限
                </label>
                <button onClick={this.handleSearch}>查询</button>
            </div>
        );
    }
}

export default StudentTableSearchTop;
