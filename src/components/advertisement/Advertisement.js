import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import Seperate from "../stuff/Seperate";

export default function Advertisement() {
    return (
        <Container>
            <Row className="g-3">
                <Col md={5}>
                    <div className="shadow rounded d-flex overflow-hidden h-100">
                        <Image className="img-fluid" alt="" src={banner1} blurDataURL="" placeholder="blur" width={600} height={400} objectFit="cover" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="shadow rounded d-flex overflow-hidden h-100">
                        <Image className="img-fluid h-100" alt="" src={banner2} blurDataURL="" placeholder="blur" width={600} height={400} objectFit="cover" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="shadow rounded d-flex overflow-hidden h-100">
                        <Image className="img-fluid d-none d-sm-none d-md-none d-lg-block" alt="" src={banner3} placeholder="blur" width={300} height={200} objectFit="cover" />
                    </div>
                </Col>
            </Row>
            <Seperate />
        </Container>
    )
}