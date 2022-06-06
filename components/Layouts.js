import Head from 'next/head'
import Navbar from "./Navbar"
import Footer from "./Footer"
import AltNavbar from "./AltNavbar"

function BaseLayout({ children }) {
    return (
      <>
        <Head>
          <title>Fake Site</title>
          <meta name="firststreet fakesite" content="Created By Toby Hoang" />
          <link rel="icon" href="/foxlogo.ico" />
        </Head>

        <Navbar />
          <main>{children}</main>
        <Footer />

      </>
    )
  }

function WhiteLayout({ children }) {
  return (
    <>
      <Head>
        <title>Fake Site</title>
        <meta name="firststreet fakesite" content="Created By Toby Hoang" />
        <link rel="icon" href="/foxlogo.ico" />
      </Head>

      <AltNavbar />
        <main>{children}</main>
      <Footer />

    </>
  )
}

export { BaseLayout, WhiteLayout }