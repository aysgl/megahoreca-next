import ReviewCarousel from "./ReviewCarousel";
import { Container } from "react-bootstrap";
import Seperate from "../stuff/Seperate";

export default function SlickCarouselSection({ title, api }) {
    return (
        <Container>
            <p className="text-uppercase text-center title">{title}</p>
            <ReviewCarousel api={api} />
            <Seperate />
        </Container>
    )
}