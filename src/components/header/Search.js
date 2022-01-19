import { Button, FormControl, InputGroup, Nav } from "react-bootstrap";
import React from "react";

export default function HeaderSearch() {
    return (
        <InputGroup>
            <InputGroup.Text id="basic-addon1">
                <i className="icon-surface1-35" />
            </InputGroup.Text>
            <FormControl
                className="border-start-0 border-end-0"
                placeholder="Vindt het nu!"
                aria-label="Vindt het nu!"
                aria-describedby="basic-addon1"
            />
            <Button variant="link" className="border border-start-0 fw-bold" id="basic-addon1">ZOEKEN</Button>
        </InputGroup>
    )
}