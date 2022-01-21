import Image from "next/image";
import { useState } from "react";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
import ActionButton from "../product/ActionButton";
import BigBadge from "../product/BigBadge";
import Stars from "../product/Stars";
import Stock from "../product/Stock";
import CategoryBreadcrumb from "./CategoryBreadcrumb";
import SlickModal from "./SlickModal";

const SlickCard = ({ stock, badge, title, category, id, price, point }) => {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    const openModal = () => {
        setShow(true);
    };

    return (
        <>
            <Card className="mb-4" style={{ cursor: "pointer" }}>
                <Card.Body>
                    <div style={{ minHeight: "110px" }}>
                        <CategoryBreadcrumb />

                        <Card.Title className="mb-1 fw-bold h6">{title}</Card.Title>

                        {stock &&
                            <Stock stock={stock} />
                        }

                        {point &&
                            <Stars point={point} />
                        }

                        {badge &&
                            <div className="position-relative" style={{ zIndex: "1" }}>
                                <div className="position-absolute end-0">
                                    <BigBadge badge={badge} />
                                </div>
                            </div>
                        }
                    </div>
                    <Image onClick={openModal} className="img-fluid rounded" src={`https://picsum.photos/id/${id}/200/200`} alt="" width={200} height={200} />

                    <SlickModal show={show} handleClose={closeModal} title={title}>
                        <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${price}/800/800`} alt="" width={800} height={800} />
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
        </>
    )
}

export default SlickCard