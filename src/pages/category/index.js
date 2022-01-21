import { Container } from 'react-bootstrap'
import useSWR from 'swr'
import CategoryList from '../../components/category/CategoryList'
import Seperate from '../../components/stuff/Seperate'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data: catdata, error } = useSWR('/api/category', fetcher)

    if (error) return <div>Failed to load</div>
    if (!catdata) return <div>Loading cat...</div>

    return (
        <Container>
            {/* {catdata.map((p, i) => (
                <CategoryList key={i} cat={p} subcat={p} />
            ))} */}
            <CategoryList catdata={catdata} />
            <Seperate />
        </Container>
    )
}