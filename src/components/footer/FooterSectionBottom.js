import Image from "next/image";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import helpNodig from "../../images/help-noding.png"

export default function FooterSectionBottom() {
    return (
        <footer className="bg-primary pt-3">
            <Container className="text-white">
                <Row className="g-0">
                    <Col lg={12} xl={6}>
                        <Row className="g-0 mb-md-0 mb-4">
                            <Col xl={5} md={12}>
                                <Image className="img-fluid w-100 d-none d-xl-block pe-3" alt="Assistant" src={helpNodig} />
                            </Col>
                            <Col md={7} className="pt-4">
                                <p className="h4 mb-0">Hulp nodig?</p>
                                <p>Neem contact op met <span style={{ textDecoration: "underline" }}>onze klantenservice</span>
                                </p>
                                <div className="pt-3">
                                    <Row>
                                        <Col sm={2}>
                                            <i style={{ fontSize: "50px", float: "left" }} className="icon-surface1-29" />
                                        </Col>
                                        <Col sm={10}>
                                            <p className="h4 mb-0">+800 243 00 00 </p>
                                            <a href="mailto:'hello@megahoreca.com'">hello@megahoreca.com</a>
                                        </Col>
                                    </Row>


                                </div>
                                <div className="pt-3 me-5">
                                    <p className="h5 mb-0">Aanmelden nieuwsbrief</p>
                                    <p className="small">Altijd als eerste op de hoogte.</p>
                                    <InputGroup>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="icon-surface1-56" />
                                        </InputGroup.Text>
                                        <FormControl
                                            className="border-start-0"
                                            placeholder="Vindt het nu!"
                                            aria-label="Vindt het nu!"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Button type="submit" variant="dark" className="mt-2">Aanmelden</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} xl={2} className="pt-4">
                        <ul className="list-unstyled">
                            <li className="h6 fw-bold pb-2">MegaHoreca.com</li>
                            <li><a href="#.">Over ons</a></li>
                            <li><a href="#.">Nieuws van ons</a></li>
                            <li><a href="#.">Mededeling</a></li>
                            <li><a href="#.">Gebruikershandleiding</a></li>
                            <li><a href="#.">Mijn account</a></li>
                            <li><a href="#.">Help</a></li>
                            <li><a href="#.">Carrièremogelijkheden</a></li>
                            <li><a href="#.">Bedrijfsblog</a></li>
                            <li><a href="#.">Bedrijfsnieuws</a></li>
                        </ul>
                    </Col>
                    <Col md={4} xl={2} className="pt-4">
                        <ul className="list-unstyled">
                            <li className="h6 fw-bold pb-2">Klantenservice</li>
                            <li><a href="#.">Bestelling</a></li>
                            <li><a href="#.">Betaling</a></li>
                            <li><a href="#.">Verzending & bezorging</a></li>
                            <li><a href="#.">Retouren & service</a></li>
                            <li><a href="#.">Telefoon reparatie</a></li>
                            <li><a href="#.">Privacy</a></li>
                            <li><a href="#.">Inloggen</a></li>
                        </ul>
                    </Col>
                    <Col md={4} xl={2} className="pt-4">
                        <ul className="list-unstyled">
                            <li className="h6 fw-bold pb-2">Zakelijk</li>
                            <li><a href="#.">Zakelijke klanten</a></li>
                            <li><a href="#.">Affiliate programma</a></li>
                            <li><a href="#.">Waardebonnen</a></li>
                        </ul>
                        <ul className="list-unstyled pt-3">
                            <li className="py-2">
                                <i style={{ fontSize: "14px" }} className="icon-surface1-62" />
                            </li>
                            <li className="py-2">
                                <i style={{ fontSize: "24px" }} className="icon-surface1-58" />
                            </li>
                            <li className="py-2">
                                <i style={{ fontSize: "18px" }} className="icon-surface1-61" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="bg-dark text-white py-3">
                <Container>
                    <Row>
                        <Col md={3} className="text-md-start text-center">
                            <p className="mb-0">© 2022 MegaHoreca</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="#.">Privacy & Cookies</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#.">Terms & Conditions</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#.">Accessibility</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3} className="text-md-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item pe-2">
                                    <a href="#.">
                                        <i className="icon-surface1-46" />
                                    </a>
                                </li>
                                <li className="list-inline-item pe-2">
                                    <a href="#.">
                                        <i className="icon-surface1-42" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#.">
                                        <i className="icon-surface1-34" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </footer>
    )
}