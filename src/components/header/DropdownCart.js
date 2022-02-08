import { useState } from "react";
import { Container, Dropdown, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"

export default function DropdownCart() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const { cart } = useSelector(state => state.products)
    return (
        <Dropdown
            align={"end"}
            className="ms-2"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
        >
            <Dropdown.Toggle variant="outline-primary">
                <i className="icon-surface1-36" />
                <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "20rem" }}>
                <Dropdown.Header>MIJN WINKELMAND</Dropdown.Header>
                <Dropdown.Item>ürünler gelecek</Dropdown.Item>
                <Dropdown.Divider />
                <Container className="btn-group">
                    <Button className="rounded me-1 btn-sm" variant="primary">GA NAAR MAND</Button>
                    <Button className="rounded btn-sm" variant="primary">NU KOPEN</Button>
                </Container>
            </Dropdown.Menu>
        </Dropdown>
    )
}