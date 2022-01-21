import { Container, Row } from "react-bootstrap";
import React from "react";
import Slider from "./slider";
import Seperate from "../stuff/Seperate";

export default function CarouselSection() {
    return (
        <Container className="mt-3">
            <Slider />
            <Seperate />
        </Container>
    )
}