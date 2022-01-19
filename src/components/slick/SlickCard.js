import Image from "next/image";
import { useState } from "react";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
import ActionButton from "../product/ActionButton";
import Badge from "../product/Badge";
import Stars from "../product/Stars";
import Stock from "../product/Stock";
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
                        <p className="text-black-50 mb-1 d-flex align-items-center small text-truncate">
                            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
                            category
                            <i style={{ fontSize: "9px" }} className="icon-surface1-44 px-2" /> {category}
                        </p>
                        <Card.Title className="mb-1 fw-bold h6">{title}</Card.Title>

                        {stock &&
                            <Stock stock={stock} />
                        }

                        {point &&
                            <Stars point={point} />
                        }

                        {badge &&
                            <div className="d-flex justify-content-end position-relative" style={{ zIndex: "1" }}>
                                <Badge badge={badge} />
                            </div>
                        }
                    </div>
                    <Image onClick={openModal} className="img-fluid rounded" src={`https://picsum.photos/id/${id}/200/200`} alt="" width={200} height={200} />

                    <SlickModal show={show} handleClose={closeModal} title={title}>
                        <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${id}/200/200`} width={200} height={200} alt="" />
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