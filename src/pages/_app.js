import Layout from "./layout"
import '../styles/globals.scss'
import { SSRProvider } from "react-bootstrap"
import Meta from "../components/seo/Meta"
import { metadata } from "../data/metadata"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  let page = metadata.find(x => x.page_sub == router.asPath)
  console.log(page);

  return (
    <SSRProvider>
      {metadata.filter(x => x.page == router.asPath).map(x =>
        <Meta title={x.title} desc={x.desc} />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
