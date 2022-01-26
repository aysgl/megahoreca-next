import React, { useState } from 'react';
import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import Seperate from '../components/stuff/Seperate';
import Meta from '../components/seo/Meta';

export default function Contact() {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [messages, setMessages] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessagesChange = (event) => {
        setMessages(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setCheckbox(event.target.value);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        event.preventDefault();
    };

    return (
        <>
            <Meta title="Contact" desc="desc" />
            <Row>
                <Col md={6} className='mx-auto'>
                    <Container>
                        <div className='shadow rounded p-5'>
                            <h2>Contact page!</h2>

                            {showModal ?
                                <div>
                                    Merhaba <span className='fw-bold'>{name} {surname} </span>
                                    bilgileriniz başarıyla gönderildi!

                                </div> :
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="First name"
                                        className="mb-3"
                                    >
                                        <Form.Control required
                                            type="text"
                                            placeholder="First name"
                                            onChange={handleNameChange}
                                            value={name} />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Last name"
                                        className="mb-3"
                                    >
                                        <Form.Control required
                                            type="text"
                                            placeholder="Last name"
                                            onChange={handleSurnameChange}
                                            value={surname} />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email"
                                        className="mb-3"
                                    >
                                        <Form.Control required
                                            type="text"
                                            placeholder="Email"
                                            onChange={handleEmailChange}
                                            value={email} />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Messages"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text"
                                            as="textarea"
                                            placeholder="Messages"
                                            onChange={handleMessagesChange}
                                            value={messages}
                                            required style={{ height: '100px' }} />
                                    </FloatingLabel>


                                    <Form.Group className='mb-3' controlId='validationCustom04'>
                                        <Form.Check
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                            onChange={handleCheckboxChange}
                                            checked={checkbox}
                                        />
                                    </Form.Group>
                                    <div className='d-flex justify-content-end'>
                                        <Button type="submit" disabled={!name || !surname || !messages || !checkbox} onClick={() => setShowModal(true)}>Send</Button>
                                    </div>
                                </Form>
                            }
                        </div>
                        <Seperate />
                    </Container>
                </Col>
            </Row>

        </>
    )
}
