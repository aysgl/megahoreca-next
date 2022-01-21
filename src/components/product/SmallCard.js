import { useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import Stock from "./Stock"
import BigBadge from "./BigBadge"
import Stars from "./Stars"
import ActionButton from "./ActionButton"
import SlickModal from "../slick/SlickModal"
import Image from "next/image"
import CategoryBreadcrumb from "../slick/CategoryBreadcrumb"
import Price from "./Price"

export default function SmallCard({ title, stars, price, stock, badge, discount, id }) {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    const openModal = () => {
        setShow(true);
    };
    return (
        <Card className="w-100 h-100">
            {discount === 0 ? null :
                <div className="position-relative" style={{ zIndex: "1" }}>
                    <div className="position-absolute end-0">
                        <BigBadge badge={badge} discount={discount} />
                    </div>
                </div>
            }
            <Image onClick={openModal} className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${id}/400/200`} alt="" width={400} height={200} />

            <SlickModal show={show} handleClose={closeModal} title={title}>
                <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${id}/200/200`} alt="" width={600} height={600} />
            </SlickModal>
            <Card.Body>
                <div style={{ minHeight: "110px" }}>
                    {/* <CategoryBreadcrumb id={id} catId={catId} catTitle={catTitle}
                        catSubcat={catSubcat} /> */}
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
