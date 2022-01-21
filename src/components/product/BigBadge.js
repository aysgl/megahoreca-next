import React from 'react'
import { Badge } from 'react-bootstrap'

export default function BigBadge({ badge, discount }) {
    return (
        <div className="big-badge bg-primary">
            <div className="bigg-badge__content p-1">
                <div style={{ width: "88px" }} className="bg-white rounded text-end p-1">
                    <span className="fw-light text-black-50 mb-0 lh-1">
                        <del className='small'>€{badge},00</del>
                    </span>
                    <div className="fw-bold mb-0 h6 text-primary lh-1">
                        <span className="small text-primary pr-1">€</span>
                        <span>{badge / 2}</span>
                        <span className="small">,00</span>
                    </div>
                </div>
                <Badge bg="danger" className="my-1 w-100">DISCOUNT</Badge>
                <p className="h6 text-center text-light pt-1">{discount}%</p>
            </div>
        </div>
    )
}
