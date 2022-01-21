import React from 'react';
import { Container } from 'react-bootstrap';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data, error } = useSWR('/api/category/', fetcher)
    console.log(data);
    if (error) return <div>Failed to load subcategory index</div>
    if (!data) return <div>Loading subcategory index...</div>
    return (
        <Container className='mb-5'>
            Subcategory index
            <ul>
                {data.map(p =>
                    <li>
                        {p.title} {p.id}
                        <ul>
                            {p.subcategory.map(s =>
                                <li>{s.title}</li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
            {/* {data.id}# {data.title} */}
        </Container>
    );
}
