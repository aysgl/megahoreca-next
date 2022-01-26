import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Seperate from '../components/stuff/Seperate';
import { faq } from '../data/faq';
import Meta from '../components/seo/Meta';

const Faq = () => {
    return (
        <>
            <Meta title="Faq" desc="desc" />
            <Container>
                <div className='shadow rounded p-5'>
                    <h2>Faq page!</h2>
                    <Accordion defaultActiveKey={faq[0].id}>
                        {faq.map(f =>
                            <Accordion.Item eventKey={f.id}>
                                <Accordion.Header>{f.title}</Accordion.Header>
                                <Accordion.Body>
                                    {f.body}
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </div>
                <Seperate />
            </Container>
        </>
    )
};

export default Faq;
