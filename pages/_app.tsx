import '~/styles/globals.css'
import Layout from '~/components/layout'
import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </Layout>
  )
}

export default MyApp
