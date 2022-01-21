import { Container } from 'react-bootstrap'
import useSWR from 'swr'
import CategoryList from '../../../components/category/CategoryList'
import Seperate from '../../../components/stuff/Seperate'

const fetcherCat = (url) => fetch(url).then((res) => res.json())
const fetcherPro = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data: catdata, error: caterror } = useSWR('/api/category', fetcherCat)
    const { data: prodata, error: proerror } = useSWR('/api/product', fetcherPro)

    if (caterror) return <div>Failed to load</div>
    if (!catdata) return <div>Loading cat...</div>

    if (proerror) return <div>Failed to load</div>
    if (!prodata) return <div>Loading cat...</div>

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