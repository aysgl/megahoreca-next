import React from 'react';
import Link from "next/link"

export default function CategoryBreadcrumb({ catname, subcatname }) {
    return (
        <div className="text-black-50 mb-1 small">
            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
            <Link href={`/category/${catname}`} as={`/category/${catname}`}>
                <a className='link-dark me-2 small text-muted mb-0'>
                    {catname}
                </a>
            </Link>
            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
            <Link href={`/category/${catname}/${subcatname}`} as={`/category/${catname}/${subcatname}`}>
                <a className='link-dark me-2 small text-muted'>
                    {subcatname}
                </a>
            </Link>
        </div>
    );
}
