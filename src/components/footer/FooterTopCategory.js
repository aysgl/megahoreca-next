import Link from "next/link"

export default function FooterTopCategory({ category }) {
    return (
        <ul className="list-unstyled text-black-50">
            <li className="fw-bold">{category.title}</li>
            {category.subcategory.map(sub =>
                <li key={sub.id}>
                    <Link href="/category/[id]" as={`/category/${category.id}`}>
                        <a className='link-dark'>{sub.title}</a>
                    </Link>
                </li>
            )}
        </ul>
    )
}