/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-12 11:30:15
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-12 16:01:39
 * @FilePath: \React\react-learn\src\components\HazyLayer\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component} from 'react';
import Layer from './Layer';
import "./index.css"

export default class HazyLayer extends Component{
    state = {
        show: false,
    }

    showLayer = () => {
        this.setState({
            show: true,
        })
    }
    hiddenLayer = () => {
        this.setState({
            show:false,
        })
    }

    render() {
        return (
            <div>
                <img src="https://images-1305186932.cos.ap-beijing.myqcloud.com/images/202208121528797.png" alt="这是一张图片" />
                {
                    this.state.show ? (<Layer onClose={this.hiddenLayer}>
                        <div style={{
                            background: "#eee"
                        }}>
                            <h1>qwertyuiop</h1>
                            <button onClick = {this.hiddenLayer}>关闭朦层</button>
                        </div>
                    </Layer>) : null
                }
                <button onClick = {this.showLayer}>显示朦层</button>
            </div>
            )
    }
}