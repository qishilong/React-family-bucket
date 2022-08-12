/*
 * @Author: Sunny-Sea 663253062@qq.com
 * @Date: 2022-08-12 11:44:42
 * @LastEditors: Sunny-Sea 663253062@qq.com
 * @LastEditTime: 2022-08-12 15:46:16
 * @FilePath: \React\react-learn\src\components\HazyLayer\layer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import "./index.css"


export default function Layer(props) {
    // 默认背景颜色
    let defaultBg = {
        background: "rgba(0,0,0,0.5)",
    }
    let objAssign = Object.assign({}, defaultBg, props)
    return (
        <div onClick={(e) => {
            if (e.target.className === "layer") {
                objAssign.onClose();
            }
        }}
            className="layer"
            style={{
                backgroud: objAssign.backgroud
            }}
        >
            <div className='layer-center'>
                {objAssign.children}
            </div>
        </div >
        )
}