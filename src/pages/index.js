import Head from 'next/head'
import Advertisement from '../components/advertisement/Advertisement'
import PerksBanner from '../components/advertisement/PerksBanner'
import SlickCarouselSection from '../components/slick/SlickCarouselSection'
import ReviewCarouselSection from "../components/slick/ReviewCarouselSection"
import MasonrySection from '../components/MasonrySection'
import CarouselSection from '../components/carousel/sliderSection'

export default function Home() {
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
      <MasonrySection api="https://jsonplaceholder.typicode.com/users" />
      <SlickCarouselSection title="PROMOTIES VAN DE WEEK" />
      <ReviewCarouselSection title="EERDER BEKEKEN DOOR JOU" />
      <PerksBanner />
    </>
  )
}
