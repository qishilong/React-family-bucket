import React, { Component } from "react";

class Index extends Component {
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
