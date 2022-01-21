import { Container, Row, Col } from 'react-bootstrap'
import useSWR from 'swr'
import CategoryList from '../../components/category/CategoryList'
import Seperate from '../../components/stuff/Seperate'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { catdata, error } = useSWR('/api/category', fetcher)

    if (error) return <div>Failed to load</div>
    if (!catdata) return <div>Loading cat...</div>

    return (
        <Container>
            <Row className='g-3'>
                {catdata.map((p, i) => (
                    <Col md={6}>
                        <CategoryList key={i} cat={p} subcat={p} />
                    </Col>
                ))}
            </Row>
            <Seperate />
        </Container>
    )
}