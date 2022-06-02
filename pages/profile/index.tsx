import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Profile() {
  const { data: session, status } = useSession()

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Profile</h1>
      </main>
    </>
  )
}
