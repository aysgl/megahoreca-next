import SlickCarousel from "./SlickCarousel";
import { Container } from "react-bootstrap";
import Seperate from "../stuff/Seperate";

export default function SlickCarouselSection({ title, prodata, catdata }) {
    return (
        <Container>
            <p className="text-uppercase text-center title">{title}</p>
            <SlickCarousel prodata={prodata} />
            <Seperate />
        </Container>
    )
}