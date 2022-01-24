import { useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import Stars from "./Stars"
import BigBadge from "./BigBadge"
import Stock from "./Stock"
import ActionButton from "./ActionButton"
import SlickModal from "../slick/SlickModal"
import Image from "next/image"
import CategoryBreadcrumb from "../slick/CategoryBreadcrumb"
import Price from "./Price"
import { prodata } from "../../data/prodata"
import Link from "next/link"


export default function BigCard({ title, stars, price, stock, badge, discount, id, catname, subcatname, slug }) {
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
            <Image onClick={openModal} className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${id}/600/450`} width={600} height={450} layout="responsive" alt="" />

            <SlickModal show={show} handleClose={closeModal} title={title}>
                <Image className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${id}/800/800`} alt="" width={800} height={800} />
            </SlickModal>

            <Link href="/product/[slug]" as={`/product/${slug}`}>
                <a className="link-dark mb-0">
                    <Card.Body>
                        <div>
                            <CategoryBreadcrumb catname={catname} subcatname={subcatname} />
                            <Card.Title as="h3" className="mb-1 fw-bold">{title}</Card.Title>

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
                                <Price style="h3" price={price} />
                            </Col>
                            <Col className="text-end">
                                <ActionButton />
                            </Col>
                        </Row>
                    </Card.Footer>
                </a>
            </Link>
        </Card>
    )
}
