import "./index.less";

import React, { Component } from "react";

import ArrowSwitch from "./ArrowSwitch";
import DotSwitch from "./DotSwitch";
import ImgContainer from "./ImgContainer";

class Index extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrc: [],
        duration: 500,
        autoDuration: 3000,
    };

    // 自动切换的计时器
    timer = null;
    state = {
        currentIndex: 0, // 显示第几张图片
    };

    autoSwitch() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let currentImg = this.state.currentIndex;
            currentImg = currentImg + (1 % this.props.imgSrc.length);
            this.handleSwitch(currentImg);
        }, this.props.autoDuration);
    }

    refImgContainer = el => {
        this.imgContainer = el;
    };

    // 切换到
    handleSwitch = index => {
        this.setState({ currentIndex: index });
        // 得到 ImgContainer 组件对象
        this.imgContainer.switchTo(index);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    componentDidMount() {
        this.autoSwitch();
    }

    handleArrowSwitch = type => {
        let current = this.state.currentIndex;
        if (type === "left") {
            current--;
            if (current < 0) {
                current = this.props.imgSrc.length - 1;
            }
        } else {
            current++;
            if (current > this.props.imgSrc.length - 1) {
                current = 0;
            }
        }
        this.handleSwitch(current);
    };

    render() {
        return (
            <div
                className="carouselChartContainer"
                style={{ width: this.props.width, height: this.props.height }}
                onMouseEnter={() => clearInterval(this.timer)}
                onMouseLeave={() => this.autoSwitch()}
            >
                <ImgContainer
                    ref={this.refImgContainer}
                    width={this.props.width}
                    height={this.props.height}
                    imgSrc={this.props.imgSrc}
                    duration={this.props.duration}
                />
                <ArrowSwitch onChange={this.handleArrowSwitch} />
                <DotSwitch
                    onChange={this.handleSwitch}
                    total={this.props.imgSrc.length}
                    currentIndex={this.state.currentIndex}
                />
            </div>
        );
    }
}

export default Index;
