import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seperate from "./stuff/Seperate";
import axios from "axios";
import BigCard from "./product/BigCard";
import SmallCard from "./product/SmallCard";

export default function MasonrySection({ prodata, catdata, title }) {
    // const [products, setProducts] = useState(null);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //         setProducts(response.data);
    //     });
    // }, []);

    // if (!products) return null;

    return (
        <>
            <Container>
                <p className="text-uppercase text-center title">{title}</p>
                {catdata &&
                    <Row className="g-3">
                        {prodata.filter(x => x.id == 1).map((pro, i) =>
                            <Col lg={6} md={6} className="">
                                {/* {catdata.map((cat, i) => */}
                                <BigCard
                                    key={pro.id}
                                    title={pro.title}
                                    price={pro.price}
                                    // catId={catdata.id}
                                    // catTitle={catdata.title}
                                    // catSubcat={catdata.subcategory}
                                    stars={pro.stars}
                                    stock={pro.stock}
                                    discount={pro.discount}
                                    badge={pro.price}
                                    id={pro.catId}
                                />
                                {/* )} */}
                            </Col>
                        )}
                        <Col lg={3} md={3}>
                            <div className="row g-3">
                                <div className="h-50 col-12">
                                    <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                        {prodata.filter(x => x.id == 2).map((pro, i) =>
                                            <SmallCard
                                                key={pro.id}
                                                title={pro.title}
                                                price={pro.price}
                                                // catId={cat.id}
                                                // catTitle={cat.title}
                                                // catSubcat={cat.subcategory}
                                                stars={pro.stars}
                                                stock={pro.stock}
                                                discount={pro.discount}
                                                badge={pro.price}
                                                id={pro.catId} />
                                        )}
                                    </div>
                                </div>
                                <div className="h-50 col-12">
                                    <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                        {prodata.filter(x => x.id == 3).map((pro, i) =>
                                            <SmallCard
                                                key={pro.id}
                                                title={pro.title}
                                                price={pro.price}
                                                // catId={cat.id}
                                                // catTitle={cat.title}
                                                // catSubcat={cat.subcategory}
                                                stars={pro.stars}
                                                stock={pro.stock}
                                                discount={pro.discount}
                                                badge={pro.price}
                                                id={pro.catId} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3}>
                            <div className="list-unstyled row g-3">
                                <div className="h-50 col-12">
                                    <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                        {prodata.filter(x => x.id == 4).map((pro, i) =>
                                            <SmallCard
                                                key={pro.id}
                                                title={pro.title}
                                                price={pro.price}
                                                // catId={cat.id}
                                                // catTitle={cat.title}
                                                // catSubcat={cat.subcategory}
                                                stars={pro.stars}
                                                stock={pro.stock}
                                                discount={pro.discount}
                                                badge={pro.price}
                                                id={pro.catId} />
                                        )}
                                    </div>
                                </div>
                                <div className="h-50 col-12">
                                    <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                        {prodata.filter(x => x.id == 5).map((pro, i) =>
                                            <SmallCard
                                                key={pro.id}
                                                title={pro.title}
                                                price={pro.price}
                                                // catId={cat.id}
                                                // catTitle={cat.title}
                                                // catSubcat={cat.subcategory}
                                                stars={pro.stars}
                                                stock={pro.stock}
                                                discount={pro.discount}
                                                badge={pro.price}
                                                id={pro.catId} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>

            <Seperate />
        </>
    )
}