import React from 'react'
import { Badge } from 'react-bootstrap'
import Price from './Price'

export default function BigBadge({ badge, discount, price }) {
    const percent = badge * discount;
    const amount = percent / 100 - badge;
    // const result = (amount) - (badge);

    return (
        <div className="big-badge bg-primary me-2 mt-2">
            <div className="bigg-badge__content p-1">
                <div className="bg-white rounded text-end p-1">
                    <div className="fw-light text-black-50 mb-0 lh-1">
                        <del className='small'><Price price={badge} /></del>
                    </div>
                    <div className="fw-bold mb-0 h6 text-primary lh-1">
                        <Price price={Math.abs(amount).toFixed(2)} />
                    </div>
                </div>
                <Badge bg="danger" className="my-1 w-100">DISCOUNT</Badge>
                <p className="text-center text-light small mb-0">{discount}%</p>
            </div>
        </div>
    )
}
