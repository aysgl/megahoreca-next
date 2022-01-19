import Image from "next/image";
import Container from "react-bootstrap/Container";
import banner1 from "../../images/banner-1.png"
import banner2 from "../../images/banner-2.png"
import banner3 from "../../images/banner-3.png"
import Seperate from "../stuff/Seperate";

export default function Advertisement() {
    return (
        <Container>
            <ul className="list-unstyled d-flex align-items-stretch">
                <li className="list-inline-item">
                    <Image className="img-fluid shadow rounded" alt="" src={banner1} />
                </li>
                <li className="list-inline-item">
                    <Image className="img-fluid shadow rounded" alt="" src={banner2} />
                </li>
                <li className="list-inline-item">
                    <Image className="img-fluid shadow rounded d-none d-sm-none d-md-none d-lg-block" alt="" src={banner3} />
                </li>
            </ul>
            <Seperate />
        </Container>
    )
}