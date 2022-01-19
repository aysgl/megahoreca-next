import { Container } from 'react-bootstrap'
import useSWR from 'swr'
import Megamenutest from '../../components/megamenutest'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data, error } = useSWR('/api/megamenu', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <Container>
            {data.map((p, i) => (
                <Megamenutest key={i} cat={p} />
            ))}
        </Container>
    )
}