import React from 'react';
import { Container, Row, Col, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import ActionButton from '../../components/product/ActionButton';
import Badge from '../../components/product/Badge';
import Stars from '../../components/product/Stars';
import Stock from '../../components/product/Stock';
import Seperate from '../../components/stuff/Seperate';

export default function index() {
    return (
        <Container>
            <Row>
                <Col md={6}>Gallery gelecek </Col>
                <Col md={6}>
                    <p>Category breadcrubms</p>
                    <p className='h2'>Category name</p>
                    <Stars />
                    <Row>
                        <Col>
                            <h3>€000,00</h3>
                            <Stock />
                        </Col>
                        <Col>
                            <Badge />
                        </Col>
                    </Row>

                    <ActionButton />

                    <div className='rounded shadow'>
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
            <Seperate />
        </Container>
    );
}
