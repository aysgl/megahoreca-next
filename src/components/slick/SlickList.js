import { useState } from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ActionButton from "../product/ActionButton";
import Price from "../product/Price";
import Stars from "../product/Stars";
import Stock from "../product/Stock";
import CategoryBreadcrumb from "./CategoryBreadcrumb";
import Link from "next/link"
import Counter from "../stuff/Counter";


const SlickCard = ({ title, stars, price, stock, id, catname, subcatname, slug }) => {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    const openModal = () => {
        setShow(true);
    };

    return (
        <Card className='mb-3'>
            <Row className='d-flex align-items-center g-0'>
                <Col md={4}>
                    <Link href="/product/[slug]" as={`/product/${slug}`}>
                        <a className="link-dark">
                            <Card.Img className='img-fluid rounded' src={`https://picsum.photos/id/${id}/500/500?random=1`} />
                        </a>
                    </Link>
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <CategoryBreadcrumb catname={catname} subcatname={subcatname} />
                        <Link href="/product/[slug]" as={`/product/${slug}`}>
                            <a className="link-dark">
                                <Card.Title as="h3" className="mb-0">{title}</Card.Title>
                            </a>
                        </Link>
                        {stock === 0 ? null :
                            <Stock stock={stock} />
                        }

                        {stars === 0 ? null :
                            <Stars stars={stars} />
                        }
                        <Card.Text>
                            <Row>
                                <Col md={8} className='border-end'>
                                    <ListGroup className="list-group-flush small">
                                        <ListGroupItem className="d-flex justify-content-between px-0">
                                            <span>product variant 1 :</span> <span>info</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between px-0">
                                            <span>product variant 2 :</span> <span>info</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between px-0">
                                            <Link href="/product/[slug]" as={`/product/${slug}`}>
                                                <a className="link-primary">
                                                    more</a>
                                            </Link>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col md={4}>
                                    <Price style={"h2"} price={price} />
                                    <Counter />
                                    <ActionButton />
                                </Col>
                            </Row>

                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default SlickCard