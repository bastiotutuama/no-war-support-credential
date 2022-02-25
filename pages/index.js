import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getServerSideProps(context) {
  console.log("ssr log test");

  const supporterList = [
    {
      name: "first",
      id: "1",
      logo_url:"https://example.com/one.png"
    },
    {
      name: "second",
      id: "2",
      logo_url:"https://example.com/second.png"
    }
  ]

  return {
    props: {
      supporterList
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {

  console.log(props.supporterList)

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
