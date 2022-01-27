import { useRouter } from 'next/router'
import { Container, Row, Col, Alert, ListGroup, ListGroupItem, Tabs, Tab } from 'react-bootstrap';
import BigActionButton from '../../../components/product/BigActionButton';
import BigBadge from '../../../components/product/BigBadge';
import Price from '../../../components/product/Price';
import Stars from '../../../components/product/Stars';
import Stock from '../../../components/product/Stock';
import CategoryBreadcrumb from '../../../components/slick/CategoryBreadcrumb';
import SlickGallery from '../../../components/slick/SlickGallery';
import Counter from '../../../components/stuff/Counter';
import Seperate from '../../../components/stuff/Seperate';
import SlickCarouselSection from "../../../components/slick/SlickCarouselSection"
import ReviewCarouselSection from "../../../components/slick/ReviewCarouselSection"
import { prodata } from "../../../data/prodata"

const data = [
    {
        id: 1,
        title: "repellendus id ullam",
        image: "https://picsum.photos/800/600?random=1"
    },
    {
        id: 2,
        title: "excepturi consequatur est",
        image: "https://picsum.photos/800/600?random=2"
    },
    {
        id: 3,
        title: "eius doloribus blanditiis",
        image: "https://picsum.photos/800/600?random=3"
    },

    {
        id: 4,
        title: "repellendus id ullam",
        image: "https://picsum.photos/800/600?random=4"
    },
    {
        id: 5,
        title: "excepturi consequatur est",
        image: "https://picsum.photos/800/600?random=5"
    },
    {
        id: 6,
        title: "eius doloribus blanditiis",
        image: "https://picsum.photos/800/600?random=6"
    }
];

export default function index() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Container>
                {prodata.filter(x => x.slug == slug).map(pro =>
                    <Row>
                        <Col md={6}>
                            <SlickGallery data={data} />
                        </Col>
                        <Col md={6}>
                            <CategoryBreadcrumb catname={pro.categoryname} subcatname={pro.subcategoryname} />
                            <p className='h2'>{slug}</p>
                            <Stars />
                            <Row>
                                <Col>
                                    <div className='mb-3'>
                                        <Price style={"h1"} price={pro.price} />
                                    </div>

                                    {pro.stock === 0 ? null :
                                        <Stock stock={pro.stock} />
                                    }

                                    {pro.stars === 0 ? null :
                                        <Stars stars={pro.stars} />
                                    }

                                    <Counter />
                                </Col>
                                <Col>
                                    {pro.discount === 0 ? null :
                                        <div className="position-relative" style={{ zIndex: "1" }}>
                                            <div className="position-absolute end-0">
                                                <BigBadge badge={pro.price} discount={pro.discount} />
                                            </div>
                                        </div>
                                    }
                                </Col>
                            </Row>

                            <BigActionButton />

                            <div className='rounded shadow p-3 my-4'>
                                <ListGroup className="list-group-flush small bg-transparent">
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 1 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 2 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 3 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <a href="#." className=''>more</a>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                )}
                <Seperate />
                <Row>
                    <Col md={6}>
                        <Tabs
                            defaultActiveKey="0"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                            variant='pills'
                        >
                            <Tab eventKey="0" title="Productinformatie">
                                Editörden eklenecek? Tab 1
                            </Tab>
                            <Tab eventKey="1" title="Accessoires">
                                Editörden eklenecek? Tab 2
                            </Tab>
                            <Tab eventKey="2" title="Revies">
                                Editörden eklenecek? Tab 3
                            </Tab>
                            <Tab eventKey="3" title="Specificaties">
                                Editörden eklenecek? Tab 4
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={6}>
                        <Alert variant="secondary shadow" className='mb-4'>
                            <Row className='g-0 d-flex align-items-center'>
                                <Col md={2} className='text-center'>
                                    <i style={{ fontSize: "26px" }} className="icon-surface1-23"></i>
                                </Col>
                                <Col md={10} className='small'>
                                    Als je dit product koopt, kan je gratis een bestelwagen reserveren voor het transport
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row className='g-0 d-flex align-items-center'>
                                <Col md={2} className='text-center'>
                                    <i style={{ fontSize: "40px" }} className="icon-surface1-21"></i>
                                </Col>
                                <Col md={10} className='small'>
                                    Voor 23.59 uur besteld, morgen gratis bezorgd
                                </Col>
                            </Row>
                        </Alert>
                    </Col>
                </Row>
            </Container>

            <Seperate />

            <SlickCarouselSection title="Alternative products" prodata={prodata} />
            <ReviewCarouselSection title="Uw winkelwagen gerelateerde producten" prodata={prodata} />
        </>
    );
}
