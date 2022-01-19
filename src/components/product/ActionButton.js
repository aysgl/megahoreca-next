import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

export default function ActionButton() {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="link" className="btn-favorite p-0" href="#">
                <i style={{ fontSize: "18px" }}
                    className="icon-surface1-41 pe-3" />
            </Button>
            <Button variant="link" className="btn-cart p-0" href="#">
                <i className="icon-surface1-36" style={{ fontSize: "20px" }} />
            </Button>
        </ButtonGroup>
    )
}
