import { Navbar, Container } from "react-bootstrap";
import DropdownProfile from "./DropdownProfile";
import DropdownCart from "./DropdownCart";
import Search from "./Search";
import logo from "../../images/logo.svg"
import Megamenu from './Megamenu';
import { CATEGORIES } from "../../data/data"
import Image from "next/image";

export default function Header() {
    return (
        <Navbar bg="white" variant="dark" expand="lg" className="py-0 shadow-sm" sticky="top" style={{ zIndex: "1046", height: "80px" }}>
            <Container className='h-100'>
                <Navbar.Brand href="#home" className="mr-auto">
                    <Image
                        src={logo}
                        alt="Megahoreca"
                        width={200}
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='h-100'>
                    <Megamenu category={CATEGORIES} />
                    <div className='w-75 d-flex'>
                        <Search />
                        <DropdownProfile />
                        <DropdownCart />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}