import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

export default function Counter() {
    return (
        <ButtonGroup style={{ maxWidth: "150px" }} className='mb-4 d-flex' size="sm" aria-label="Basic example">
            <Button variant="outline-primary">-</Button>
            <Button as="div" variant="outline-primary">0</Button>
            <Button variant="outline-primary">+</Button>
        </ButtonGroup>
    )
}
