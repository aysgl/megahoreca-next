import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import mansetOne from "../../images/manset-one.png"
import axios from "axios"
import Image from "next/image";

export default function Slider() {
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setSlider(response.data);
        });
    }, []);

    if (!slider) return null;

    return <Col xl={8} lg={9} md={12} className="px-0">
        <Carousel fade>
            {slider.map((slide, i) =>
                <Carousel.Item key={i} className="bg-light rounded" interval={2000}>
                    <Row>
                        <Col className="align-self-center m-2">
                            <div className="d-none d-lg-block">
                                <Image className="img-fluid rounded" src={`https://picsum.photos/id/${i}/800/1200`} width={800} height={1200} alt="Product one" priority />
                            </div>
                            <div className="d-lg-none">
                                <Image className="img-fluid rounded" src={`https://picsum.photos/id/${i}/800/400`} width={800} height={400} alt="Product one" priority />
                            </div>
                        </Col>

                        <Col md={8} className="align-self-center pe-5 m-2">
                            <div>
                                <p className="text-black-30">{slide.id}# GARDEN</p>
                                <h1 className="fw-bold pe-5">{slide.title.substring(0, 30)}</h1>
                                <p className="text-muted pb-3 pe-5">{slide.body.substring(0, 60)}</p>
                                <Button variant="primary">SHOP
                                    NOW
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Carousel.Item>
            )}
        </Carousel>
    </Col>
}