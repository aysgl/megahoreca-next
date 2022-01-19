import React from 'react';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import Link from "next/link"
import Image from 'next/image';

export default function Megamenutest({ cat, key }) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={cat}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {/* {category.map(cat => */}
                            <Nav.Item key={cat.id}>
                                <Nav.Link eventKey={cat.id} className='position-relative'>
                                    <img className='rounded-circle mx-2'
                                        width={20}
                                        height={20}
                                        placeholder="blur"
                                        layout='intrinsic'
                                        src={cat.icon} alt="" />
                                    {cat.title}
                                </Nav.Link>
                            </Nav.Item>
                            {/* )} */}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {/* {category.map(cat => */}
                            <Tab.Pane key={cat.id} eventKey={cat.id} className='bg-light rounded p-3'>
                                <Row style={{ zIndex: "1", position: "relative" }}>
                                    <Col md={5}>
                                        <ul className="list-unstyled lh-1">
                                            {cat.subCategories.map((sub, i) =>
                                                <li className='small my-1'>
                                                    <Link href="/megamenu/[id]" as={`/megamenu/${cat.id}`}>
                                                        <a>{sub}</a>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </Col>
                                    <Col md="7" className='text-end'>
                                        <Image src={cat.img}
                                            className='rounded'
                                            alt=""
                                            width={650}
                                            height={650}
                                            placeholder="blur" />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            {/* )} */}
                        </Tab.Content>
                    </Col>
                </Row>
            </Container>
        </Tab.Container>
    );
}
