import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Seperate from '../../components/stuff/Seperate';
import { projects } from '../../data/projects';
import Link from 'next/link';

export default function Projects() {
    return (
        <Container>
            <Row>
                {projects.map(p =>
                    <Col md={6}>
                        <Link href={`/projects/[id]`}
                            as={`/projects/${p.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}>
                            <a className='link-dark'>
                                <Card className='mb-4'>
                                    <Card.Img src={p.img} />
                                    <Card.Body className="card-img-overlay">
                                        <div className='h-100 d-flex align-items-end w-75'>
                                            <div className='bg-white p-4'>
                                                <Card.Title as="h3" className='fw-bold'>{p.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{p.created_date}</Card.Subtitle>
                                                <Card.Text>{p.body}</Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                )}
            </Row>

            <Seperate />
        </Container>
    )
}
