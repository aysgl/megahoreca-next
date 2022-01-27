import { Container } from 'react-bootstrap'
import CategoryList from '../../components/category/CategoryList'
import Seperate from '../../components/stuff/Seperate'
import { catdata } from '../../data/catdata'

export default function CategoryPage() {
    return (
        <Container>
            <CategoryList catdata={catdata} />
            <Seperate />
        </Container>
    )
}
