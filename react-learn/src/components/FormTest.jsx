import React, { Component } from "react";

class FormTest extends Component {
    state = {
        loginId: "",
        password: "",
        sex: "male",
        chooseLoves: [],
        loves: [
            { value: "football", text: "足球" },
            { value: "basetball", text: "篮球" },
            { value: "movie", text: "电影" },
            { value: "music", text: "音乐" },
            { value: "other", text: "其他" },
        ],
        city: "beijing",
    };

    handleChange = e => {
        let value = e.target.value; // 读取表单的值
        const name = e.target.name; // 读取表单的 name
        // checkbox 特殊处理
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                value = [...this.state.chooseLoves, value];
            } else {
                value = this.state.chooseLoves.filter(item => item !== value);
            }
        }
        this.setState({ [name]: value }); // 赋值
    };

    // 获取所有爱好选项框
    getLoveCheckbox() {
        const checkboxGroup = this.state.loves.map(item => (
            <label key={item.value}>
                <input
                    type="checkbox"
                    name="chooseLoves"
                    value={item.value}
                    onChange={this.handleChange}
                    checked={this.state.chooseLoves.includes(item.value)}
                />
                {item.text}
            </label>
        ));
        return checkboxGroup;
    }

    render() {
        const checkboxGroup = this.getLoveCheckbox();
        return (
            <>
                <p>
                    <input
                        type="text"
                        name="loginId"
                        value={this.state.loginId}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked={this.state.sex === "male"}
                            onChange={this.handleChange}
                        />{" "}
                        男
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="female"
                            checked={this.state.sex === "female"}
                            onChange={this.handleChange}
                        />{" "}
                        女
                    </label>
                </p>
                <p>{checkboxGroup}</p>
                <p>
                    <select
                        name="city"
                        select={this.state.city}
                        onChange={this.handleChange}
                    >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shengzhen">深圳</option>
                    </select>
                </p>
                <p>
                    <button
                        onClick={() => {
                            console.log(this.state);
                        }}
                    >
                        获取 state 里的值
                    </button>
                </p>
            </>
        );
    }
}

export default FormTest;
