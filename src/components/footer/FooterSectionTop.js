import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";
import { CATEGORIES } from "../../data/data"
import FooterTopCategory from "./FooterTopCategory";

export default function FooterSectionTop() {
    return (
        <Container>
            <Row>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={CATEGORIES[0]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={CATEGORIES[1]} />
                    <FooterTopCategory category={CATEGORIES[2]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={CATEGORIES[3]} />
                    <FooterTopCategory category={CATEGORIES[4]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={CATEGORIES[5]} />
                    <FooterTopCategory category={CATEGORIES[6]} />
                    <FooterTopCategory category={CATEGORIES[7]} />
                </Col>
                <Col className="border-0 pe-4">
                    <FooterTopCategory category={CATEGORIES[8]} />
                    <FooterTopCategory category={CATEGORIES[9]} />
                    <FooterTopCategory category={CATEGORIES[10]} />
                </Col>
            </Row>
        </Container>
    )
}