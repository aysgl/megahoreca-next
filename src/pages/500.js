import { Container } from "react-bootstrap";
import Seperate from "../components/stuff/Seperate";
import Link from "next/link"

export default function Custom404() {
    return (
        <Container>
            <div className=" text-center">
                <h1 className="text-secondary fw-bold mb-0 lh-1" style={{ fontSize: "160px" }}>500</h1>
                <h2 className="text-secondary fw-light mb-4 h4">Server-side error occurred you can go <Link href="/"><a className="h4 mb-0">home page</a></Link></h2>
            </div>
            <Seperate />
        </Container>
    )
}