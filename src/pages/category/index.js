import { Container } from 'react-bootstrap'
import CategoryList from '../../components/category/CategoryList'
import Meta from '../../components/seo/Meta'
import Seperate from '../../components/stuff/Seperate'
import { catdata } from '../../data/catdata'

export default function CategoryPage() {
    return (
        <Container>
            <Meta title="Category" desc="desc" />
            <CategoryList catdata={catdata} />
            <Seperate />
        </Container>
    )
}
