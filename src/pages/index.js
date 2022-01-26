import Advertisement from '../components/advertisement/Advertisement'
import SlickCarouselSection from '../components/slick/SlickCarouselSection'
import ReviewCarouselSection from "../components/slick/ReviewCarouselSection"
import MasonrySection from '../components/MasonrySection'
import CarouselSection from '../components/carousel/sliderSection'
import CategoryListSmall from '../components/category/CategoryListSmall'
import useSWR from 'swr'
import Meta from '../components/seo/Meta'

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
      <Meta title="Home" desc="desc" />
      <CarouselSection />
      {prodata && catdata &&
        <>
          <SlickCarouselSection title="PROMOTIES VAN DE WEEK" prodata={prodata} catdata={catdata} />
          <Advertisement />
          <MasonrySection title="Ontdek onze products" prodata={prodata} catdata={catdata} />
          <CategoryListSmall prodata={prodata} catdata={catdata} />
          <SlickCarouselSection title="PROMOTIES VAN DE WEEK" prodata={prodata} catdata={catdata} />
          <ReviewCarouselSection title="EERDER BEKEKEN DOOR JOU" prodata={prodata} catdata={catdata} />
        </>
      }
    </>
  )
}
