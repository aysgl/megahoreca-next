import { useState } from 'react';
import { Container, Breadcrumb, Row, Col, Card, Button, ListGroup, ListGroupItem, Accordion, Form, ButtonGroup, FloatingLabel, Dropdown, DropdownButton } from 'react-bootstrap';
import ActionButton from '../../components/product/ActionButton';
import Seperate from '../../components/stuff/Seperate';

export default function index({ slug }) {
    const [toggleViewMode, setToggleViewMode] = useState(false);

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#.">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Category detay sayfasıdır</Breadcrumb.Item>
            </Breadcrumb>
            <div className='mb-3'>
                <Row className='d-flex align-items-center'>
                    <Col md={4}>
                        <p className='mb-0 fw-bold'>Category Name</p>
                    </Col>
                    <Col md={4} className='text-center'><span className='fw-bold'>0</span> search result</Col>
                    <Col className='text-end' md={4}>
                        <div className='d-flex justify-content-end'>
                            {/* <FloatingLabel className='me-2' controlId="floatingSelect" label="Sorting options">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Select item</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel> */}
                            <DropdownButton
                                size="sm"
                                className='me-2'
                                variant='light'
                                as={ButtonGroup}
                                align={{ lg: 'end' }}
                                title="Sorting options"
                            >
                                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                            </DropdownButton>
                            <ButtonGroup size='sm' aria-label="Basic example">
                                <Button onClick={() => setToggleViewMode(!toggleViewMode)} variant={`${!toggleViewMode ? "outline-dark" : "dark"}`} className='d-flex align-items-center'>
                                    <i class="icon-surface1-54"></i>
                                </Button>
                                <Button onClick={() => setToggleViewMode(!toggleViewMode)} variant={`${toggleViewMode ? "outline-dark" : "dark"}`} className='d-flex align-items-center'>
                                    <i class="icon-surface1-55"></i>
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </div>

            {toggleViewMode ?
                "grid hazırlanacak" :
                <Row className='g-3'>
                    <Col md={3}>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Category filter</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Group controlId="formBasicCheckbox1">
                                            <Form.Check type="checkbox" id="formBasicCheckbox1" label="Check me out" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox2">
                                            <Form.Check type="checkbox" id="formBasicCheckbox2" label="Check me out" />
                                        </Form.Group>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Price</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Label>Price range</Form.Label>
                                    <Form.Range />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Pick color</Accordion.Header>
                                <Accordion.Body>
                                    <div class="row">

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-primary text-white">Primary</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-secondary text-white">Secondary</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-success text-white">Success</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-danger text-white">Danger</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-warning text-dark">Warning</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-info text-dark">Info</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-light text-dark">Light</div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="p-3 mb-3 bg-dark text-white">Dark</div>
                                        </div>

                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={9}>
                        <Card className='mb-3'>
                            <Row className='d-flex align-items-center g-0'>
                                <Col md={4}>
                                    <Card.Img className='img-fluid rounded' src="https://picsum.photos/500/500?random=1" />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Text className='text-secondary mb-0'>
                                            Category breadcrumbs component ekelenecek
                                        </Card.Text>
                                        <Card.Title as="h3">Product name - Lorem ipsum sit amet</Card.Title>
                                        <Card.Text>
                                            <Row>
                                                <Col md={8} className='border-end'>
                                                    <ListGroup className="list-group-flush small">
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
                                                <Col md={4}>
                                                    <p className='h2 d-flex'>€000,00</p>
                                                    <ButtonGroup className='mb-4 d-flex' size="sm" aria-label="Basic example">
                                                        <Button variant="outline-primary">-</Button>
                                                        <Button as="div" variant="outline-primary">0</Button>
                                                        <Button variant="outline-primary">+</Button>
                                                    </ButtonGroup>
                                                    <ActionButton />
                                                </Col>
                                            </Row>

                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        <Card className='mb-3'>
                            <Row className='d-flex align-items-center g-0'>
                                <Col md={4}>
                                    <Card.Img className='img-fluid rounded' src="https://picsum.photos/500/500?random=2" />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Text className='text-secondary mb-0'>
                                            Category breadcrumbs component ekelenecek
                                        </Card.Text>
                                        <Card.Title as="h3">Product name - Lorem ipsum sit amet</Card.Title>
                                        <Card.Text>
                                            <Row>
                                                <Col md={8} className='border-end'>
                                                    <ListGroup className="list-group-flush small">
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
                                                <Col md={4}>
                                                    <p className='h2 d-flex'>€000,00</p>
                                                    <ButtonGroup className='mb-4 d-flex' size="sm" aria-label="Basic example">
                                                        <Button variant="outline-primary">-</Button>
                                                        <Button as="div" variant="outline-primary">0</Button>
                                                        <Button variant="outline-primary">+</Button>
                                                    </ButtonGroup>
                                                    <ActionButton />
                                                </Col>
                                            </Row>

                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            }

            <Seperate />
        </Container >
    );
}
