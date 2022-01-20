import React from 'react';
import Link from "next/link"

export default function CategoryBreadcrumb({ category }) {
    return (
        <p className="text-black-50 mb-1 d-flex align-items-center small text-truncate">
            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
            <Link href="/category/[id]" as={`/category/${category.id}`}>
                <a className='link-dark'>{category}</a>
            </Link>
            <i style={{ fontSize: "9px" }} className="icon-surface1-44 px-2" /> {category}
        </p>
    );
}
