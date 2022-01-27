import { useRouter } from "next/router";
import { post } from "../../../data/post";
import Link from "next/link";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Seperate from "../../../components/stuff/Seperate";
import SocialShare from "../../../components/stuff/SocialShare"

export default function Blog() {
    const router = useRouter();
    const { blog, testid } = router.query;

    return (
        <>
            {post.filter(x => x.id == testid).map((po, i) =>
                <Container>
                    <Card className="h-100" key={po.id} style={{ marginTop: "3rem", marginRight: "2rem" }}>
                        <Row md={4} style={{ marginTop: "-2rem", marginRight: "-2rem" }} className="g-0">
                            <Col md={11} className="ms-auto">
                                <Card.Img className="shadow rounded" src={po.img} alt="" />
                            </Col>
                            <Col md={10} className="mx-auto my-4">
                                <Card.Body>
                                    <Card.Title as="h2">{po.title}</Card.Title>
                                    <Card.Text>{po.body}</Card.Text>
                                    <SocialShare url={po.url} hashtag={[po.title]} desc={po.body} />
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <Seperate />
                    <Row>
                        <Col>
                            {po.id > 1 ?
                                <Card className="border-0 shadow">
                                    <Card.Body>
                                        <Link href={`/blog/id/${po.id - 1}`}>
                                            <a>
                                                <Row className="d-flex align-items-center">
                                                    <Col className="col-auto">
                                                        {post.filter(x => x.id == po.id - 1).map(pa => <img className="rounded" height={60} width={60} src={pa.thumbs} />)}
                                                    </Col>
                                                    <Col className="col-auto fw-bold">
                                                        {post.filter(x => x.id == po.id - 1).map(pa => pa.title)}
                                                    </Col>
                                                </Row>
                                            </a>

                                        </Link>
                                    </Card.Body>
                                </Card>
                                :
                                null
                            }
                        </Col>
                        <Col>
                            {po.id < post.length &&
                                <Card className="border-0 shadow">
                                    <Card.Body>
                                        <Link href={`/blog/id/${po.id + 1}`}>
                                            <a>
                                                <Row className="d-flex align-items-center justify-content-end">
                                                    <Col className="col-auto fw-bold">
                                                        {post.filter(x => x.id == po.id + 1).map(pa => pa.title)}
                                                    </Col>
                                                    <Col className="col-auto">
                                                        {post.filter(x => x.id == po.id + 1).map(pa => <img className="rounded" height={60} width={60} src={pa.thumbs} />)}
                                                    </Col>
                                                </Row>
                                            </a>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            }
                        </Col>
                    </Row>

                    <Seperate />
                </Container>
            )}
        </>
    );
}
