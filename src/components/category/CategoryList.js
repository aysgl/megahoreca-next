import React from 'react';
import { Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import Link from "next/link"
import Image from 'next/image';

export default function CategoryList({ cat }) {
    // console.log(cat);
    return (
        <Card className='h-100'>
            <Card.Body>
                <Row className="mb-3">
                    <Col sm={7}>
                        <Row className='g-0'>
                            <Col sm={2}>
                                <Image className='rounded-circle'
                                    width={30}
                                    height={30}
                                    placeholder="blur"
                                    layout='intrinsic'
                                    src={cat.icon} alt="" />
                            </Col>
                            <Col sm={10}>
                                <p className='fw-bold pt-1'>{cat.title}</p>
                                <ul className="list-unstyled">
                                    {cat.subcategory.map((sub, i) =>
                                        <li key={i} className='my-1'>
                                            <Link href="/category/[id]" as={`/category/${cat.id}`}>
                                                <a className='link-dark'>{sub.title}</a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5}>
                        <Image src={cat.img}
                            className='rounded'
                            alt=""
                            width={650}
                            height={650}
                            placeholder="blur" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
