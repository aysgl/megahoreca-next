import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

export default function BigActionButton() {
    return (
        <ButtonGroup>
            <Button variant="dark" className="btn-cart d-flex align-items-center rounded me-2" href="#">
                <i className="icon-surface1-36" style={{ fontSize: "20px" }} />
                <span className='ms-2'>Add to basket</span>
            </Button>
            <Button variant="outline-light" className="btn-favorite d-flex aling-items-center justify-content-center rounded" href="#">
                <i style={{ fontSize: "22px" }}
                    className="icon-surface1-41" />
            </Button>
        </ButtonGroup>
    )
}
