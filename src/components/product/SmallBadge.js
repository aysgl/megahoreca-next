import React from 'react'

export default function SmallBadge({ badge }) {
    return (
        <div className="small-badge">
            <div className="small-badge__content text-center">
                <small>laatste stuks</small>
                <p className="h6 text-center">{badge}</p>
            </div>
        </div>
    )
}
