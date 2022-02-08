import Layout from "./layout"
import '../styles/globals.scss'
import { SSRProvider } from "react-bootstrap"
import Meta from "../components/seo/Meta"
import { metadata } from "../data/metadata"
import { useRouter } from "next/router"
import { Provider } from "react-redux"
import store from "../store/configStore"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <SSRProvider>
      {metadata.filter(x => x.page == router.asPath).map(x =>
        <Meta key={x.id} title={x.title} desc={x.desc} />
      )}
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SSRProvider>
  )
}

export default MyApp
