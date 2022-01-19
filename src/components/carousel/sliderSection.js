import { Container, Row } from "react-bootstrap";
import React from "react";
import BannerLeft from "./BannerLeft";
import Slider from "./slider";
import BannerRight from "./BannerRight";
import Seperate from "../stuff/Seperate";

export default function CarouselSection() {
    return (
        <Container className="mt-3">
            <Row>
                <BannerLeft />
                <Slider />
                <BannerRight />
            </Row>
            <Seperate />
        </Container>
    )
}