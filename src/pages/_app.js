import Layout from "./layout"
import '../styles/globals.scss'
import { SSRProvider } from "react-bootstrap"

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout title="abc">
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
