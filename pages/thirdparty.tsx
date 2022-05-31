import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

const Thirdparty: NextPage = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    console.log(session)
    // return <p>Signed in as {session?.user?.email || ''}</p>
  }

  const credentialsAuth = async ()=> {
    const signInResponse = await signIn('credentials', {
      email: 'miles@email.com',
      password: 'password',
      redirect: false,
    })

    console.log(signInResponse)
  }

  return (
    <>
      <Head>
        <title>Thirdparty</title>
        <meta name="description" content="Thirdparty" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Thirdparty</h1>
        <div>
          <Link href="/api/auth/signin">
            <a>Sign in</a>
          </Link>
          <button
            onClick={() =>
              signIn('google', {
                callbackUrl: 'http://localhost:3000/login',
              })
            }
          >
            Google Sing in
          </button>

          <button
            onClick={credentialsAuth}
          >
            Credentials
          </button>

          <button onClick={() => signOut()}>Sing Out</button>
        </div>
      </main>
    </>
  )
}

export default Thirdparty
