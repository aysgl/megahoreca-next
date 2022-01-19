import { Container, Row, Col } from 'react-bootstrap'
import useSWR from 'swr'
import CategoryList from '../../components/CategoryList'
import Seperate from '../../components/stuff/Seperate'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data, error } = useSWR('/api/category', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <Container>
            <Row className='g-3'>
                {data.map((p, i) => (
                    <Col md={6}>
                        <CategoryList key={i} cat={p} />
                    </Col>
                ))}
            </Row>
            <Seperate />
        </Container>
    )
}