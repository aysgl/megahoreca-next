import React from 'react';
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Home({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}