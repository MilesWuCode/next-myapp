import '~/styles/globals.css'
import Layout from '~/components/layout'
import type { AppProps } from 'next/app'
import { SessionProvider, signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
        <ToastContainer position="bottom-right" />
      </Layout>
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession()

  const isUser = !!session?.user

  useEffect(() => {
    if (status === 'loading') return

    if (!isUser) signIn()
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default MyApp
