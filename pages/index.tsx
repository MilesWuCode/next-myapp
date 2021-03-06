import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Home</h1>
      </main>
    </>
  )
}

export default Home
