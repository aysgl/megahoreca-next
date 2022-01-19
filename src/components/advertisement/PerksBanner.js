import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Seperate from "../stuff/Seperate";

export default function PerksBanner() {
    return (
        <Container>
            <Row>
                <Col md={3} sm={6} className="d-block">
                    <i className="icon-surface1-26 text-black-50 d-inline-block pe-2"
                        style={{ fontSize: "54px" }} />
                    <div className="d-inline-block">
                        <p className="h3 fw-bold mb-0 text-black-50 lh-1">7/24</p>
                        <p className="fw-bold text-black-50 mb-0">LIVE SPORT</p>
                    </div>

                </Col>
                <Col md={3} sm={6} className="d-block">
                    <i className="icon-surface1-27 text-black-50 d-inline-block pe-2"
                        style={{ fontSize: "54px" }} />
                    <div className="d-inline-block">
                        <p className="h3 fw-bold mb-0 text-black-50 lh-1">100%</p>
                        <p className="fw-bold text-black-50 mb-0">SECURE SHOPPING</p>
                    </div>
                </Col>

                <Col md={3} sm={6} className="d-block">
                    <i className="icon-surface1-23 text-black-50 d-inline-block pe-2"
                        style={{ fontSize: "54px" }} />
                    <div className="d-inline-block">
                        <p className="h3 fw-bold mb-0 text-black-50 lh-1">1-3 Day%</p>
                        <p className="fw-bold text-black-50 mb-0">FAST SHIPPING</p>
                    </div>
                </Col>
                <Col md={3} sm={6} className="d-block">
                    <i className="icon-surface1-28 text-black-50 d-inline-block pe-2"
                        style={{ fontSize: "54px" }} />
                    <div className="d-inline-block">
                        <p className="h3 fw-bold mb-0 text-black-50 lh-1">PRODUCT</p>
                        <p className="fw-bold text-black-50 mb-0">INSTALLATION</p>
                    </div>
                </Col>
            </Row>
            <Seperate />
        </Container>
    )
}