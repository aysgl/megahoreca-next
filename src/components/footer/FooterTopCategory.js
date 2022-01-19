import Link from "next/link"

export default function FooterTopCategory({ category }) {
    return (
        <ul className="list-unstyled text-black-50">
            <li className="fw-bold">{category.title}</li>
            {category.subCategories.map(subCategory =>
                <li key={subCategory}>
                    {/* <a href="#." className="text-secondary">{subCategory}</a> */}
                    <Link href="/category/[id]" as={`/category/${category.id}`}>
                        <a className='link-dark'>{subCategory}</a>
                    </Link>
                </li>
            )}
        </ul>
    )
}