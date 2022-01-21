import Layout from "./layout"
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout title="abc">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
