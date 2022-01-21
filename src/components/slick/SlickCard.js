import Image from "next/image";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ActionButton from "../product/ActionButton";
import BigBadge from "../product/BigBadge";
import Price from "../product/Price";
import Stars from "../product/Stars";
import Stock from "../product/Stock";
import CategoryBreadcrumb from "./CategoryBreadcrumb";
import SlickModal from "./SlickModal";

const SlickCard = ({ title, stars, price, stock, badge, discount, id }) => {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    const openModal = () => {
        setShow(true);
    };

    return (
        <Card className="mb-4 h-100" style={{ cursor: "pointer" }}>
            {discount === 0 ? null :
                <div className="position-relative" style={{ zIndex: "1" }}>
                    <div className="position-absolute end-0">
                        <BigBadge badge={badge} discount={discount} />
                    </div>
                </div>
            }
            <Image onClick={openModal} className="img-fluid rounded" src={`https://picsum.photos/id/${id}/200/200`} alt="" width={200} height={200} />

            <SlickModal show={show} handleClose={closeModal} title={title}>
                <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${price}/800/800`} alt="" width={800} height={800} />
            </SlickModal>

            <Card.Body>
                <div style={{ minHeight: "110px" }}>
                    <CategoryBreadcrumb />
                    <Card.Title className="mb-1 fw-bold h6">{title}</Card.Title>
                    {stock === 0 ? null :
                        <Stock stock={stock} />
                    }

                    {stars === 0 ? null :
                        <Stars stars={stars} />
                    }
                </div>
            </Card.Body>
            <Card.Footer className="border-0">
                <Row className="d-flex align-items-center justify-content-between">
                    <Col>
                        <Price style="h5" price={price} />
                    </Col>
                    <Col className="text-end">
                        <ActionButton />
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default SlickCard