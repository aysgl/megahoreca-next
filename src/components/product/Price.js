import React from 'react';

export default function Price({ price }) {
    return <div>
        <p className="fw-bold lh-1 h5">
            <span>€{price.slice(0, 3)}</span>
            <span className="small">{price.slice(3, 5)}</span>
        </p>
    </div>
}
