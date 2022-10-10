import "./index.less";

import React, { Component } from "react";

import ImgContainer from "./ImgContainer";

class Index extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrc: [],
        duration: 500,
        autoDuration: 3000,
    };
    render() {
        return (
            <div className="carouselChartContainer">
                <ImgContainer
                    width={this.props.width}
                    height={this.props.height}
                    imgSrc={this.props.imgSrc}
                    duration={this.props.duration}
                />
            </div>
        );
    }
}

export default Index;
