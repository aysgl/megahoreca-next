import { Card, Row, Col } from "react-bootstrap"
import Stars from "./Stars"
import Badge from "./Badge"
import Stock from "./Stock"
import ActionButton from "./ActionButton"
import Image from "next/image"

export default function StandartCard({ title, category, point, price, stock, badge, id }) {
    return (
        <Card className="h-100">
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
                        <div className="d-flex justify-content-end">
                            <Badge badge={badge} />
                        </div>
                    }
                </div>
                <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${price}/200/200`} alt="" />
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
