import React from 'react'

export default function SmallBadge({ badge }) {
    return (
        <div className="percent-tag">
            <div className="percent-tag__content">
                <small>laatste stuks</small>
                <p className="h6 pb-0 mb-0">{badge}</p>
            </div>
        </div>
    )
}
