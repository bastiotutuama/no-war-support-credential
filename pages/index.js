import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Client } from '@notionhq/client'

export async function getServerSideProps(context) {
  console.log("ssr log test");
  console.log("notion token: " + process.env.NOTION_TOKEN);

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })

  async () => {
    //https://www.notion.so/1648factory/119a9d7d5bf141fb886678b9f6306fb2?v=81cfa99447b4469da882d757d0e1ffa5
    const supportersList = await notion.databases.query({
      database_id: '119a9d7d5bf141fb886678b9f6306fb2'
    })
    console.log(supportersList)
  }

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

      <main className="">
        <Header title="No War Credentials." />
        <p className="description">
          Acknowledge that you position against war.
        </p>

        <h2 className="mt-8"><strong>Supporters</strong></h2>

        <div>
          <ul>
          
          {props.supporterList.map(supporter => (
            <li key={supporter.id}>{supporter.name}</li>
          ))}
          </ul>
        </div>

      </main>

      <Footer />
    </div>
  )
}
