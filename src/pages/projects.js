import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Seperate from '../components/stuff/Seperate';
import Meta from '../components/seo/Meta';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <>
            <Meta title="Projects" desc="desc" />
            <Container>
                {projects.map(p =>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src={p.img} />
                        <Card.Body className="card-img-overlay">
                            <div className='bg-white d-inline-block'>
                                <Card.Title as="h3" className='fw-bold'>{p.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{p.created_date}</Card.Subtitle>
                                <Card.Text>{p.body}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                )}
                <Seperate />
            </Container>
        </>
    )
}
