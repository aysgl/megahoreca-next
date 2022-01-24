import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { slider } from "../../data/slider"
import Image from "next/image";

export default function Slider() {
    return (
        <Carousel fade>
            {slider.map((slide, i) =>
                <Carousel.Item key={i} className="bg-light rounded" interval={2000}>
                    <div className="d-none d-lg-block">
                        <div className="d-flex overflow-hidden">
                            <Image className="img-fluid rounded" src={slide.url} width={1600} height={600} alt="Product one" priority />
                        </div>
                    </div>
                    <div className="d-lg-none">
                        <div className="d-flex overflow-hidden">
                            <Image className="img-fluid rounded" src={slide.thumbs} width={800} height={400} alt="Product one" priority />
                        </div>
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    )
}