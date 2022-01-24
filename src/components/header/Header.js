import { Navbar, Container, Breadcrumb } from "react-bootstrap";
import DropdownProfile from "./DropdownProfile";
import DropdownCart from "./DropdownCart";
import Search from "./Search";
import logo from "../../images/logo.svg"
import Megamenu from './Megamenu';
import { catdata } from "../../data/catdata"
import Image from "next/image";
import { useRouter } from 'next/router'


export default function Header() {
    const router = useRouter();
    const { category } = router.query;
    return (
        <>
            <Navbar bg="white" variant="dark" expand="lg" className="py-0 shadow-sm mb-3" sticky="top" style={{ zIndex: "1046", height: "80px" }}>
                <Container className='h-100'>
                    <Navbar.Brand href="/" className="mr-auto">
                        <Image
                            src={logo}
                            alt="Megahoreca"
                            width={200}
                            height={80}
                            unoptimized
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='h-100'>
                        <Megamenu catdata={catdata} />
                        <div className='w-75 d-flex'>
                            <Search />
                            <DropdownProfile />
                            <DropdownCart />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#.">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>item</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </>
    )
}