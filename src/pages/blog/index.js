import { post } from "../../data/post";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import Seperate from "../../components/stuff/Seperate";

export default function BlogsPage() {
    return (
        <Container>
            <Row className="g-3">
                {post.map(post =>
                    <Col md={4}>
                        <Card className="h-100" key={post.id}>
                            <Card.Img variant="top" src={post.thumbs} alt="" />
                            <Card.Body>
                                <Card.Title as="h4" style={{ minHeight: "90px" }}>{post.title}</Card.Title>
                                <Card.Text>{post.body.substring(0, 90)}...</Card.Text>
                                <div className="d-flex justify-content-end">
                                    <Link href={post.slug}>
                                        <a className="btn btn-sm btn-primary">Read Post</a>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
            <Seperate />
        </Container>
    );
}
