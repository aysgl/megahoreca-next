import Image from 'next/image';
import { useState } from 'react'
import { Offcanvas, Button, Tab, Row, Col, Nav, Container } from 'react-bootstrap'

export default function Megamenu({ category }) {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <>
            <Button className='w-25 text-secondary text-uppercase fw-bold h-100 p-0'
                variant="link"
                show={show}
                onMouseEnter={showDropdown}
            >
                <i style={{ fontSize: "10px" }} className="icon-surface1-38 pe-2"></i> Aan De Slag
            </Button>

            <Offcanvas className="mx-auto"
                placement='top'
                show={show}
                onMouseLeave={hideDropdown}
                style={{ minHeight: "580px", top: "80px" }}>
                <Offcanvas.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={category[0].id}>
                        <Container>
                            {category &&
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            {category.map(cat =>
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
                                            )}
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            {category.map(cat =>
                                                <Tab.Pane key={cat.id} eventKey={cat.id}>
                                                    <Row style={{ zIndex: "1", position: "relative" }}>
                                                        <Col md={5}>
                                                            {cat.subCategories.map(sub =>
                                                                <ul key={sub} className="list-unstyled lh-1">
                                                                    <li>
                                                                        <a href="#" className="text-dark">{sub}</a>
                                                                    </li>
                                                                </ul>
                                                            )}
                                                        </Col>
                                                        <Col md="7" className='text-end'>
                                                            <Image src={cat.img}
                                                                alt=""
                                                                width={650}
                                                                height={650}
                                                                layout='fixed'
                                                                // unoptimized={true}
                                                                placeholder="blur" />
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            )}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            }
                        </Container>
                    </Tab.Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
