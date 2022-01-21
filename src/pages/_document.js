import Document, { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/seo/Meta';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>

          <link rel="icon" href="/favicon.ico" />
          <Meta title="deneme" />
          <meta
            name="description"
            content="Use Sass to start your Next.js app with CSS superpowers!"
          ></meta>
        </Head>
        <body>
          <Main classname="deneme-main" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
