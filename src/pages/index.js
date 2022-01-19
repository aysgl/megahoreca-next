import Head from 'next/head'

// import Container from '../components/Container';
// import Main from '../components/Main';
// import Footer from '../components/Footer';
// import Grid from '../components/Grid';
// import Card from '../components/Card';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>

      <main>
        <h1>
          MegaHoreca <Button variant='primary'>deneme</Button>
        </h1>

        <p >
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </Container>
  )
}
