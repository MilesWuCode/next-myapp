import type { NextPage } from 'next'
import Head from 'next/head'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="404 - Page Not Found" />
      </Head>

      <h1 className="flex justify-center mt-[30vh] text-3xl">
        404 - This page could not be found.
      </h1>
    </>
  )
}

export default NotFound
