import React, { Component } from "react";

class Index extends Component {
    refContainer = el => (this.div = el);

    // 计时器间隔时间
    tick = 16;

    // 计时器序号
    timer = null;

    switchTo(index) {
        // 设置正确的 index
        if (index < 0) {
            index = 0;
        } else if (index > this.props.imgSrc.length - 1) {
            index = this.props.imgSrc.length - 1;
        }
        // 1. 根据index，计算 div 最终的 marginLeft
        const targetLeft = -index * this.props.width;
        // 2. 得到当前的marginLeft
        let currentLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        // 3.计算运动次数
        const times = Math.ceil(this.props.duration / this.tick);
        let currentTime = 0;
        // 4. 计算每次运动的距离
        const totalDis = targetLeft - currentLeft; // 总距离
        const dis = totalDis / times;

        // 先停止之前的动画
        clearInterval(this.timer);

        this.timer = setInterval(() => {
            currentTime++;
            currentLeft += dis;
            this.div.style.marginLeft = currentLeft + "px";
            if (currentTime === times) {
                // 停止运动
                this.div.style.marginLeft = targetLeft + "px";
                clearInterval(this.timer);
            }
        }, this.tick);
    }

    render() {
        const imgs = this.props.imgSrc.map((item, i) => (
            <img
                key={i}
                src={item}
                alt=""
                style={{ height: this.props.height, width: this.props.width, float: "left" }}
            />
        ));
        return (
            <div
                ref={this.refContainer}
                style={{
                    width: this.props.width * this.props.imgSrc.length,
                    height: this.props.height,
                }}
            >
                {imgs}
            </div>
        );
    }
}

export default Index;
