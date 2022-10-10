import React, { Component } from "react";

import CarouselChart from ".";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.webp";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.webp";


class Test extends Component {
    render() {
        return (
            <>
                <CarouselChart imgSrc={[img1, img2, img3, img4, img5]} />
            </>
        );
    }
}

export default Test;
