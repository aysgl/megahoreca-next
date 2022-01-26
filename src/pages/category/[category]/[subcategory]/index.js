import { useState } from 'react';
import { useRouter } from 'next/router'
import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import SlickCard from '../../../../components/slick/SlickCard';
import Seperate from '../../../../components/stuff/Seperate';
import { prodata } from "../../../../data/prodata"
import SlickList from "../../../../components/slick/SlickList"
import Filtering from '../../../../components/filter/Filtering';
import ActionDropdown from '../../../../components/product/ActionDropdown';

export default function CategoryDetails() {
    const [toggleViewMode, setToggleViewMode] = useState(false);
    const [prodatas, setProdatas] = useState([...prodata]);
    const router = useRouter();
    const { category, subcategory } = router.query;

    // const filteredData = prodatas.filter(x => x.price == "30" ? [...prodata] : null)
    return (
        <Container>
            <Row className='d-flex align-items-center mb-3'>
                <Col md={4}>
                    <p className='fw-bold mb-0'>{category}/{subcategory} </p>
                </Col>
                <Col md={4} className='text-center'>
                    <span>
                        {prodata.filter(x => x.categoryname == category && x.subcategoryname == subcategory).map((pro, i) =>
                            <span key={i} className='fw-bold pe-2'>{i + 1}</span>
                        )}
                        results found
                    </span>
                </Col>
                <Col className='text-end' md={4}>
                    <div className='d-flex justify-content-end'>
                        {/* <ActionDropdown /> */}

                        <ButtonGroup size='sm' aria-label="Basic example">
                            <Button onClick={() => setToggleViewMode(!toggleViewMode)} variant={`${!toggleViewMode ? "outline-dark" : "dark"}`} className='d-flex align-items-center'>
                                <i className="icon-surface1-54"></i>
                            </Button>
                            <Button onClick={() => setToggleViewMode(!toggleViewMode)} variant={`${toggleViewMode ? "outline-dark" : "dark"}`} className='d-flex align-items-center'>
                                <i className="icon-surface1-55"></i>
                            </Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>

            <Row className='g-3'>
                <Col md={3}>
                    <Filtering />
                </Col>
                {toggleViewMode ?
                    <Col md={9}>
                        <Row className='g-3'>
                            {prodata.filter(x => x.categoryname == category && x.subcategoryname == subcategory).map((pro, i) =>
                                <Col md={4}>
                                    <SlickCard
                                        key={pro.id}
                                        title={pro.title.substring(0, 40)}
                                        price={pro.price}
                                        catname={pro.categoryname}
                                        subcatname={pro.subcategoryname}
                                        stars={pro.stars}
                                        stock={pro.stock}
                                        discount={pro.discount}
                                        badge={pro.price}
                                        id={pro.catId}
                                        slug={pro.slug}
                                    />
                                </Col>
                            )}
                        </Row>
                    </Col>
                    :
                    <Col md={9}>
                        {prodata.filter(x => x.categoryname == category && x.subcategoryname == subcategory).map((pro, i) =>
                            <SlickList key={pro.id}
                                title={pro.title.substring(0, 40)}
                                price={pro.price}
                                catname={pro.categoryname}
                                subcatname={pro.subcategoryname}
                                stars={pro.stars}
                                stock={pro.stock}
                                discount={pro.discount}
                                badge={pro.price}
                                id={pro.catId}
                                slug={pro.slug}
                            />
                        )}
                    </Col>
                }
            </Row>
            <Seperate />
        </Container >
    )
}
