import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>No War Credentials.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="No War Credentials." />
        <p className="description">
          Acknowledge that you position against war.
        </p>


      </main>

      <Footer />
    </div>
  )
}
