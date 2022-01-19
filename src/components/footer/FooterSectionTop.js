import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";
import { megamenu } from "../../data/data"
import FooterTopCategory from "./FooterTopCategory";

export default function FooterSectionTop() {
    return (
        <Container>
            <Row>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={megamenu[0]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={megamenu[1]} />
                    <FooterTopCategory category={megamenu[2]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={megamenu[3]} />
                    <FooterTopCategory category={megamenu[4]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={megamenu[5]} />
                    <FooterTopCategory category={megamenu[6]} />
                    <FooterTopCategory category={megamenu[7]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={megamenu[8]} />
                    <FooterTopCategory category={megamenu[9]} />
                    <FooterTopCategory category={megamenu[10]} />
                </Col>
            </Row>
        </Container>
    )
}