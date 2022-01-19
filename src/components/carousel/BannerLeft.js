import { Col, Row } from "react-bootstrap";
import React from "react";
import Badge from "../product/Badge";
import SmallBadge from "../product/SmallBadge";
import Image from "next/image";

export default function BannerLeft() {
    return <Col lg={2} md={12} className="d-none d-xl-block">
        <div className="d-flex align-content-between flex-wrap h-100 border rounded p-2">
            <Row className="d-flex justify-content-between g-0">
                <Col xs={9}>
                    <p className="lh-sm mb-3">Aanbevolen Combinaties</p>
                </Col>
                <Col xs={3}>
                    <SmallBadge />
                </Col>
                <Col xs={12} className="position-relative" style={{ zIndex: "1" }}>
                    <Badge />
                </Col>
            </Row>
            <div>
                <Image className="img-fluid rounded" src="https://picsum.photos/200/300" width={200} height={300} alt="" />
            </div>
        </div>
    </Col>
}