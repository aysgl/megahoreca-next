import { useState } from 'react';
import { useRouter } from 'next/router'
import { Container, Button, Accordion, Form, ButtonGroup, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import SlickCard from '../../../components/slick/SlickCard';
import Seperate from '../../../components/stuff/Seperate';
import Link from "next/link"
import SlickList from "../../../components/slick/SlickList"
import { prodata } from "../../../data/prodata"

export default function CategoryPage() {
    const [toggleViewMode, setToggleViewMode] = useState(false);
    const router = useRouter();
    const { category } = router.query;

    return (
        <Container>
            <div className='mb-3'>
                <Row className='d-flex align-items-center'>
                    <Col md={4}>
                        <p className='fw-bold mb-0'>Category query: {category}</p>
                    </Col>
                    <Col md={4} className='text-center'><span className='fw-bold'>0</span> search result</Col>
                    <Col className='text-end' md={4}>
                        <div className='d-flex justify-content-end'>
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
                {toggleViewMode ?
                    <Col md={9}>
                        <Row className='g-3'>
                            {prodata.filter(x => x.categoryname == category).map(pro =>
                                <Col md={4}>
                                    <SlickCard
                                        key={pro.id}
                                        title={pro.title.substring(0, 40)}
                                        price={pro.price}
                                        catname={pro.categoryname}
                                        subcatname={pro.subcategoryname}
                                        stars={pro.stars}
                                        stock={pro.stock}
                                        discount={pro.discount}
                                        badge={pro.price}
                                        id={pro.catId}
                                        slug={pro.slug}
                                    />
                                </Col>
                            )}
                        </Row>
                    </Col>
                    :
                    <Col md={9}>
                        {prodata.filter(x => x.categoryname === category).map(pro =>
                            <SlickList key={pro.id}
                                title={pro.title.substring(0, 40)}
                                price={pro.price}
                                catname={pro.categoryname}
                                subcatname={pro.subcategoryname}
                                stars={pro.stars}
                                stock={pro.stock}
                                discount={pro.discount}
                                badge={pro.price}
                                id={pro.catId}
                                slug={pro.slug}
                            />
                        )}
                    </Col>
                }
            </Row>
            <Seperate />
        </Container >
    )
}