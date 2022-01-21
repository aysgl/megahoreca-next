import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";
import { catdata } from "../../data/catdata"
import FooterTopCategory from "./FooterTopCategory";

export default function FooterSectionTop() {
    return (
        <Container>
            <Row>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={catdata[0]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={catdata[1]} />
                    <FooterTopCategory category={catdata[2]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={catdata[3]} />
                    <FooterTopCategory category={catdata[4]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={catdata[5]} />
                    <FooterTopCategory category={catdata[6]} />
                    <FooterTopCategory category={catdata[7]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={catdata[8]} />
                    <FooterTopCategory category={catdata[9]} />
                    <FooterTopCategory category={catdata[10]} />
                </Col>
            </Row>
        </Container>
    )
}