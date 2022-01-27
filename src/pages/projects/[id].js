import { useRouter } from 'next/router';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Meta from '../../components/seo/Meta';
import SlickGallery from '../../components/slick/SlickGallery';
import Seperate from '../../components/stuff/Seperate';
import { projects } from '../../data/projects';

const data = [
    {
        id: 1,
        title: "repellendus id ullam",
        image: "https://picsum.photos/1200/1200?random=1"
    },
    {
        id: 2,
        title: "excepturi consequatur est",
        image: "https://picsum.photos/1200/1200?random=2"
    },
    {
        id: 3,
        title: "eius doloribus blanditiis",
        image: "https://picsum.photos/1200/1200?random=3"
    },

    {
        id: 4,
        title: "repellendus id ullam",
        image: "https://picsum.photos/1200/1200?random=4"
    },
    {
        id: 5,
        title: "excepturi consequatur est",
        image: "https://picsum.photos/1200/1200?random=5"
    },
    {
        id: 6,
        title: "eius doloribus blanditiis",
        image: "https://picsum.photos/1200/1200?random=6"
    }
];

export default function ProjeDetails() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Meta title="Projects" desc="desc" />
            <Container>
                {projects.filter(x => x.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') == id).map(p =>
                    <Row>
                        <Col md={6}>
                            <SlickGallery data={data} />
                        </Col>
                        <Col md={6}>
                            <div className='shadow rounded p-5'>
                                <h2>{p.title}</h2>
                                <p>{p.body}</p>
                                <p className='h5'>Did you like our projects?</p>
                                <Button>Contact now</Button>
                            </div>
                        </Col>
                    </Row>
                )}
                <Seperate />
            </Container>
        </>
    )
}
