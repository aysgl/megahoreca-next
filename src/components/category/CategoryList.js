import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Link from "next/link"
import Image from 'next/image';

export default function CategoryList({ catdata }) {
    return (
        <>
            {catdata.map((cat, i) =>
                <Card className='h-100 mb-3'>
                    <Card.Body>
                        <div className='d-flex align-items-center'>
                            <div>
                                <Image className='rounded'
                                    width={40}
                                    height={40}
                                    placeholder="blur"
                                    layout='intrinsic'
                                    src={cat.icon} alt="" />
                            </div>
                            <p className='fw-bold ms-2 mb-0'>{cat.title}</p>
                        </div>

                        <Row className="g-2">
                            {cat.subcategory.map((sub, i) =>
                                <Col md={2} key={i}>
                                    <Card className="category-card text-white">
                                        <Card.Img src={cat.img} alt="Card image" />
                                        <Link href="/category/subcategory/[id]" as={`/category/subcategory/${sub.id}`}>
                                            <a className='link-dark'>
                                                <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>
                                                    <Card.Title as="p" className='text-center text-white fw-bold small mb-0'>{sub.title}</Card.Title>
                                                </Card.ImgOverlay>
                                            </a>
                                        </Link>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Card.Body>
                </Card>
            )}
        </>
    );
}
