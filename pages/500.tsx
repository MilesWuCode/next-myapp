import type { NextPage } from 'next'
import Head from 'next/head'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>500 - Page Error</title>
        <meta name="description" content="500 - Page Error" />
      </Head>

      <h1 className="flex justify-center mt-[30vh] text-3xl">
        500 - Page Error
      </h1>
    </>
  )
}

export default NotFound
