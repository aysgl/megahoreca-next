import React from 'react';
import { Container, Row, Col, Alert, ListGroup, ListGroupItem, Tabs, Tab } from 'react-bootstrap';
import ActionButton from '../../components/product/ActionButton';
import BigBadge from '../../components/product/BigBadge';
import Stars from '../../components/product/Stars';
import Stock from '../../components/product/Stock';
import SlickGallery from '../../components/slick/SlickGallery';
import Counter from '../../components/stuff/Counter';
import Seperate from '../../components/stuff/Seperate';

const data = [
    {
        id: 1,
        title: "repellendus id ullam",
        label: "Dolorem officiis temporibus.",
        image: "https://picsum.photos/800/600?random=1"
    },
    {
        id: 2,
        title: "excepturi consequatur est",
        label: "Officia non provident dolor esse et neque.",
        image: "https://picsum.photos/800/600?random=2"
    },
    {
        id: 3,
        title: "eius doloribus blanditiis",
        label: "Ut recusandae vel vitae molestiae id soluta.",
        image: "https://picsum.photos/800/600?random=3"
    },

    {
        id: 4,
        title: "repellendus id ullam",
        label: "Dolorem officiis temporibus.",
        image: "https://picsum.photos/800/600?random=4"
    },
    {
        id: 5,
        title: "excepturi consequatur est",
        label: "Officia non provident dolor esse et neque.",
        image: "https://picsum.photos/800/600?random=5"
    },
    {
        id: 6,
        title: "eius doloribus blanditiis",
        label: "Ut recusandae vel vitae molestiae id soluta.",
        image: "https://picsum.photos/800/600?random=6"
    }
];


export default function index() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <SlickGallery data={data} />
                </Col>
                <Col md={6}>
                    <p>Category breadcrubms</p>
                    <p className='h2'>Category name</p>
                    <Stars />
                    <Row>
                        <Col>
                            <h3>€000,00</h3>
                            <Stock />
                            <Counter />
                        </Col>
                        <Col>
                            <BigBadge />
                        </Col>
                    </Row>


                    <ActionButton />

                    <div className='rounded shadow my-4'>
                        <Row className='p-3'>
                            <Col>
                                <ListGroup className="list-group-flush small bg-transparent">
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 1 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 2 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 3 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <a href="#." className=''>more</a>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col>
                                <Alert variant="primary" className='mb-0'>
                                    Ship <br></br>or Cargo <br></br>information
                                </Alert>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>Alternative products</Col>
                <Col md={6}>
                    <Tabs
                        defaultActiveKey="0"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        variant='pills'
                    >
                        <Tab eventKey="0" title="Productinformatie">
                            Tab 1
                        </Tab>
                        <Tab eventKey="1" title="Accessoires">
                            Tab 2
                        </Tab>
                        <Tab eventKey="2" title="Revies">
                            Tab 3
                        </Tab>
                        <Tab eventKey="3" title="Specificaties">
                            Tab 4
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            <Seperate />
        </Container>
    );
}
