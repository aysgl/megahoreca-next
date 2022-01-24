import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seperate from "./stuff/Seperate";
import BigCard from "./product/BigCard";
import SmallCard from "./product/SmallCard";

export default function MasonrySection({ prodata, title }) {
    return (
        <>
            <Container>
                <p className="text-uppercase text-center title">{title}</p>
                <Row className="g-3">
                    <Col lg={6} md={6} className="">
                        {prodata.filter(x => x.id == 1).map((pro, i) =>
                            <BigCard
                                key={pro.id}
                                title={pro.title}
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

                    <Col lg={3} md={3}>
                        <div className="row g-3">
                            <div className="h-50 col-12">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {prodata.filter(x => x.id == 2).map((pro, i) =>
                                        <SmallCard
                                            key={pro.id}
                                            title={pro.title}
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
                                </div>
                            </div>
                            <div className="h-50 col-12">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {prodata.filter(x => x.id == 3).map((pro, i) =>
                                        <SmallCard
                                            key={pro.id}
                                            title={pro.title}
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
                                </div>
                            </div>
                            <div className="h-50 col-12">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    {prodata.filter(x => x.id == 5).map((pro, i) =>
                                        <SmallCard
                                            key={pro.id}
                                            title={pro.title}
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