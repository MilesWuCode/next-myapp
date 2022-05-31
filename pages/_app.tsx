import '~/styles/globals.css'
import Layout from '~/components/layout'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
