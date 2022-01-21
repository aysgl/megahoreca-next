import React from 'react';
import { Tab, Row, Col, Nav, Card, Ratio } from 'react-bootstrap';
import Link from "next/link"
import Image from 'next/image';

export default function CategoryListSmall({ cat }) {
    return (
        <Col>
            <Card className="category-card text-white">
                <Card.Img src={cat.img} alt="Card image" />
                <Link href="/category/[id]" as={`/category/${cat.id}`}>
                    <a className='link-dark'>
                        <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>

                            <Card.Title as="p" className='text-center text-white fw-bold'>{cat.title}</Card.Title>

                        </Card.ImgOverlay>
                    </a>
                </Link>
            </Card>
        </Col>
    );
}
