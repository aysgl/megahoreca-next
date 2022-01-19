import React from 'react'
import { Button } from 'react-bootstrap'

export default function Badge({ badge }) {
    return (
        <div className="percent-tag-blue bg-primary d-flex justify-content-center">
            <div className="percent-tag__content p-1">
                <div style={{ width: "88px" }} className="bg-white rounded text-end p-1">
                    <span className="fw-light text-black-50 mb-0 lh-1">
                        <del className='h6'>€{badge},00</del>
                    </span>
                    <div className="fw-bold mb-0 h5 text-primary lh-1">
                        <span className="small text-primary pr-1">€</span>
                        <span>{badge / 2}</span>
                        <span className="small">,00</span>
                    </div>
                </div>
                <Button variant="danger" className="px-2 py-0 my-1 btn-sm w-100">DISCOUNT</Button>
                <p className="h6 pb-0 mb-0 pt-1">-{badge / 2}%</p>
            </div>
        </div>
    )
}
