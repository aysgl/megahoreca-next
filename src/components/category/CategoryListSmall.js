import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from "next/link"
import Image from 'next/image';
import Seperate from '../stuff/Seperate';

export default function CategoryListSmall({ catdata, prodata }) {
    return (
        <Container>
            <p className="text-uppercase text-center title">Ontdek onze categorien</p>
            <Row xs={3} md={6} lg={8} className='g-3'>
                {catdata.map((cat, i) =>
                    <Col>
                        <Card className="category-card text-white">
                            <Card.Img src={cat.img} alt="Card image" />
                            <Link href="/category/[id]" as={`/category/${cat.id}`}>
                                <a className='link-dark'>
                                    <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>
                                        <Card.Title as="p" className='text-center text-white fw-bold small mb-0'>{cat.title}</Card.Title>
                                    </Card.ImgOverlay>
                                </a>
                            </Link>
                        </Card>
                    </Col>
                )}
            </Row>
            <Seperate />
        </Container>
    );
}
