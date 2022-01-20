import { useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import Stars from "./Stars"
import Badge from "./Badge"
import Stock from "./Stock"
import ActionButton from "./ActionButton"
import SlickModal from "../slick/SlickModal"
import Image from "next/image"
import CategoryBreadcrumb from "../slick/CategoryBreadcrumb"

export default function BigCard({ title, category, point, price, stock, badge, id }) {
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
                <div>
                    <CategoryBreadcrumb category={category} />
                    <Card.Title as="h3" className="mb-1 fw-bold">{title + " lorem ispum sit amet dolor for big card"}</Card.Title>

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

                <Image onClick={openModal} className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${price}/600/400`} width={600} height={400} layout="responsive" alt="" />

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
    )
}
