import { useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import Stock from "./Stock"
import Badge from "./Badge"
import Stars from "./Stars"
import ActionButton from "./ActionButton"
import SlickModal from "../slick/SlickModal"
import Image from "next/image"
import CategoryBreadcrumb from "../slick/CategoryBreadcrumb"

export default function SmallCard({ title, category, point, price, stock, badge, id }) {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    const openModal = () => {
        setShow(true);
    };
    return (
        <Card className="w-100 h-100">
            <Card.Body>
                <div style={{ minHeight: "110px" }}>
                    <CategoryBreadcrumb category={category} />
                    <Card.Title className="mb-1 fw-bold h6">{title}</Card.Title>

                    {stock &&
                        <Stock stock={stock} />
                    }

                    {point &&
                        <Stars point={point} />
                    }

                    {badge &&
                        <div className="position-relative" style={{ zIndex: "1" }}>
                            <div className="position-absolute">
                                <Badge badge={badge} />
                            </div>
                        </div>
                    }
                </div>
                <Image onClick={openModal} className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${price}/400/200`} alt="" width={400} height={200} />

                <SlickModal show={show} handleClose={closeModal} title={title}>
                    <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${price}/200/200`} alt="" width={600} height={600} />
                </SlickModal>
            </Card.Body>
            <Card.Footer className="border-0">
                <Row className="d-flex align-items-center justify-content-between">
                    <Col>
                        <p className="fw-bold lh-1 h5">
                            <span>€{price},</span>
                            <span className="small">{price + 1}</span>
                        </p>
                    </Col>
                    <Col className="text-end">
                        <ActionButton />
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
