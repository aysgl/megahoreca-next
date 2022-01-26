import { useState } from 'react'
import { Offcanvas, Button, Tab, Row, Col, Nav, Container, Card } from 'react-bootstrap'
import Link from "next/link"

export default function Megamenu({ catdata }) {
    const [showMenu, setShowMenu] = useState(false);
    const showDropdown = (e) => {
        setShowMenu(!showMenu);
    }
    const hideDropdown = e => {
        setShowMenu(false);
    }

    return (
        <>
            <Button className='w-25 text-secondary text-uppercase fw-bold h-100 p-0'
                variant="link"
                show={showMenu}
                onMouseEnter={showDropdown}
            >
                <i style={{ fontSize: "10px" }} className="icon-surface1-38 pe-2"></i> Aan De Slag
            </Button>

            <Offcanvas className="mx-auto"
                placement='top'
                show={showMenu}
                onMouseLeave={hideDropdown}
                style={{ minHeight: "580px", top: "80px" }}>
                <Offcanvas.Body>
                    <Tab.Container defaultActiveKey={catdata[0].id}>
                        <Container>
                            {catdata &&
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            {catdata.map(cat =>
                                                <Nav.Item key={cat.id}>
                                                    <Nav.Link eventKey={cat.id} className='position-relative'>
                                                        <img className='rounded mx-2'
                                                            width={40}
                                                            height={40}
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
                                            {catdata.map(cat =>
                                                <Tab.Pane key={cat.id} eventKey={cat.id}>
                                                    <Row style={{ zIndex: "1", position: "relative" }} className='g-2'>
                                                        {cat.subcategory.map(sub =>
                                                            <Col key={sub.id} lg={3} sm={4}>
                                                                <Card className="category-card text-white">
                                                                    <Card.Img src={cat.img} alt="Card image" />
                                                                    <Link href={`/${sub.slug}`}>
                                                                        <a className='link-dark'>
                                                                            <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>
                                                                                <Card.Title as="p" className='text-center text-white fw-bold small mb-0'>
                                                                                    {sub.title}
                                                                                </Card.Title>
                                                                            </Card.ImgOverlay>
                                                                        </a>
                                                                    </Link>
                                                                </Card>
                                                            </Col>
                                                        )}
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
