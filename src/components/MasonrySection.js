import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seperate from "./stuff/Seperate";
import axios from "axios";
import BigCard from "./product/BigCard";
import SmallCard from "./product/SmallCard";

export default function MasonrySection({ stock, stars, badge, id }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setProducts(response.data);
        });
    }, []);

    if (!products) return null;

    return (
        <>
            <Container>
                <Row className="g-3">
                    <Col lg={6} md={6} className="">
                        {products.slice(0, 1).map(pro =>
                            <BigCard key={pro.id} title={pro.name} price={pro.id} category={pro.username} point={pro.id} stock={pro.id} />
                        )}
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="row g-3">
                            <div className="h-50 col">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {products.slice(1, 2).map(pro =>
                                        <SmallCard key={pro.id} title={pro.name} price={pro.id} category={pro.username} badge={pro.id} stock={pro.id} />
                                    )}
                                </div>
                            </div>
                            <div className="h-50 col">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {products.slice(2, 3).map(pro =>
                                        <SmallCard key={pro.id} title={pro.name} price={pro.id} category={pro.username} point={pro.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="list-unstyled row g-3">
                            <div className="h-50 col">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {products.slice(3, 4).map(pro =>
                                        <SmallCard key={pro.id} title={pro.name} price={pro.id} category={pro.username} point={pro.id} />
                                    )}
                                </div>
                            </div>
                            <div className="h-50 col">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {products.slice(4, 5).map(pro =>
                                        <SmallCard key={pro.id} title={pro.name} price={pro.id} category={pro.username} stock={pro.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Seperate />
        </>
    )
}