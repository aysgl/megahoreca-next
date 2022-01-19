import Image from "next/image";
import { Card } from "react-bootstrap";
import SmallBadge from "../product/SmallBadge";

export default function ReviewCard({ badge, title, id, price }) {
    return (
        <div data-toggle="modal" data-target="#product-one" className="item mb-4">
            <Card>
                {badge &&
                    <div className="d-flex justify-content-end position-absolute top-0 end-0 p-2" style={{ zIndex: "2" }}>
                        <SmallBadge badge={id} />
                    </div>
                }
                <div className="position-relative">
                    <Image className="img-fluid rounded" src={`https://picsum.photos/id/${id}/200/200`} alt="" width={200} height={200} />
                </div>
                <Card.Body className="pb-0">
                    <Card.Title className="mb-1 fw-bold small" style={{ minHeight: "36px" }}>{title}</Card.Title>
                </Card.Body>
                <Card.Footer className="border-0 pt-0">
                    <p className="fw-bold lh-1 h5">
                        <span>€{price},</span>
                        <span className="small">{price + 1}</span>
                    </p>
                </Card.Footer>
            </Card>
        </div>
    )
}