import Head from 'next/head'
import Navbar from '~/components/navbar'

export const title = 'next-myapp'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={title} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content={title} />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
