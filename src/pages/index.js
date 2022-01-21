import Head from 'next/head'
import Advertisement from '../components/advertisement/Advertisement'
import PerksBanner from '../components/advertisement/PerksBanner'
import SlickCarouselSection from '../components/slick/SlickCarouselSection'
import ReviewCarouselSection from "../components/slick/ReviewCarouselSection"
import MasonrySection from '../components/MasonrySection'
import CarouselSection from '../components/carousel/sliderSection'
import CategoryListSmall from '../components/category/CategoryListSmall'
import useSWR from 'swr'
import { Container, Row } from 'react-bootstrap'
import Seperate from '../components/stuff/Seperate'

const catfetcher = (url) => fetch(url).then((res) => res.json())
const profetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data: catdata, error: caterror } = useSWR('/api/category', catfetcher)
  const { data: prodata, error: proerror } = useSWR('/api/product', profetcher)

  if (caterror) return <div>Failed to load cat</div>
  if (!catdata) return <div>Loading cat...</div>


  if (proerror) return <div>Failed to load pro</div>
  if (!prodata) return <div>Loading pro...</div>

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>
      <CarouselSection />
      <SlickCarouselSection title="PROMOTIES VAN DE WEEK" />
      <Advertisement />
      {prodata && catdata &&
        <MasonrySection prodata={prodata} catdata={catdata} />
      }

      <Container>
        <Row xs={3} md={6} lg={8} className='g-3'>
          {catdata.map((c, i) => (
            <CategoryListSmall key={i} cat={c} subcat={c} />
          ))}
        </Row>
      </Container>
      <Seperate />
      <SlickCarouselSection title="PROMOTIES VAN DE WEEK" />
      <ReviewCarouselSection title="EERDER BEKEKEN DOOR JOU" />
      <PerksBanner />
    </>
  )
}
