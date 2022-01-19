import SlickCarousel from "./SlickCarousel";
import { Container } from "react-bootstrap";
import Seperate from "../stuff/Seperate";

export default function SlickCarouselSection({ title, api }) {
    return (
        <Container>
            <p className="text-uppercase text-center title">{title}</p>
            <SlickCarousel api={api} />
            <Seperate />
        </Container>
    )
}