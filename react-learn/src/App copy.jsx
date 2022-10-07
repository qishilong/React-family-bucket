import React, { Component } from "react";

// import NumberInput from "./components/NumberInput";

class App extends Component {
    state = {
        val: "123",
        loves: ["足球", "篮球", "音乐", "其他"],
        chooseLoves: ["篮球", "音乐"],
        selectValue: "beijing",
    };
    render() {
        const checkBoxs = this.state.loves.map(item => (
            <label key={item}>
                <input
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(item)}
                    onChange={e => {
                        // console.log(e.target.checked);
                        if (e.target.checked) {
                            this.setState({ chooseLoves: [...this.state.chooseLoves, item] });
                        } else {
                            this.setState({
                                chooseLoves: this.state.chooseLoves.filter(l => l !== item),
                            });
                        }
                    }}
                />
                {item}
            </label>
        ));
        return (
            // <NumberInput />
            <>
                {checkBoxs}
                <button
                    onClick={() => {
                        console.log(this.state.chooseLoves);
                    }}
                >
                    获取选中的值
                </button>
                <select
                    value={this.state.selectValue}
                    onChange={e => {
                        this.setState({
                            selectValue: e.target.value,
                        });
                    }}
                >
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="shengzhen">深圳</option>
                </select>
            </>
        );
    }
}

export default App;
