import Image from "next/image";
import Container from "react-bootstrap/Container";
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import Seperate from "../stuff/Seperate";

export default function Advertisement() {
    return (
        <Container>
            <ul className="list-unstyled d-flex align-items-stretch">
                <li className="list-inline-item">
                    <Image className="img-fluid shadow rounded" alt="" src={banner1} placeholder="blur" width={500} height={400} />
                </li>
                <li className="list-inline-item">
                    <Image className="img-fluid shadow rounded" alt="" src={banner2} placeholder="blur" width={500} height={400} />
                </li>
                <li className="list-inline-item">
                    <Image className="img-fluid shadow rounded d-none d-sm-none d-md-none d-lg-block" alt="" src={banner3} placeholder="blur" width={200} height={400} />
                </li>
            </ul>
            <Seperate />
        </Container>
    )
}