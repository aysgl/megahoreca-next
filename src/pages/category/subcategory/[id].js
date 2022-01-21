import React from 'react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function SubCategory() {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.id && `/api/category/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading subcategory id...</div>
    return (
        <Container className='mb-5'>
            Subcategory -{data.title}- #id
            {data.subcategory.map(d =>
                <li>{d.title}</li>
            )}
            {/* <ul>
                {data.filter(x => x.id == data.id).map(d =>
                    <li>{d.title}</li>
                )}
            </ul> */}
        </Container>
    );
}
