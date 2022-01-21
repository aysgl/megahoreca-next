import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios"
import Image from "next/image";

export default function Slider() {
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setSlider(response.data);
        });
    }, []);

    if (!slider) return null;

    return (
        <Carousel fade>
            {slider.map((slide, i) =>
                <Carousel.Item key={i} className="bg-light rounded" interval={2000}>
                    <div className="d-none d-lg-block">
                        <div className="d-flex overflow-hidden">
                            <Image className="img-fluid rounded" src={`https://picsum.photos/id/${i}/1600/600`} width={1600} height={600} alt="Product one" priority />
                        </div>
                    </div>
                    <div className="d-lg-none">
                        <div className="d-flex overflow-hidden">
                            <Image className="img-fluid rounded" src={`https://picsum.photos/id/${i}/800/400`} width={800} height={400} alt="Product one" priority />
                        </div>
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    )
}