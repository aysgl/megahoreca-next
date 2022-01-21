import React from 'react';
import Link from "next/link"

export default function CategoryBreadcrumb({ id, catId, catTitle, catSubcat }) {
    console.log("id " + id);
    console.log("catid " + catId);
    return (
        <p className="text-black-50 mb-1 d-flex align-items-center small text-truncate">
            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
            <Link href="/category">
                <a className='link-dark me-2'>
                    {/* {catId === id ? "eşit" : "eşit değil"}  */}
                    {/* {catSubcat} */}
                    {/* {catTitle} */}
                    Dinamik Category gelecek
                </a>
            </Link>
            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
            {/* {subcat.subcategory.filter(x => x.id == subcat.id).map(cat =>
                <Link href="/category/subcategory/[id]" as={`/category/subcategory/${cat.id}`}>
                    <a className='link-dark me-2'>{subcat.subcategory[cat.id].title}</a>
                </Link>
            )} */}
        </p>
    );
}
