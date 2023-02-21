import '@/styles/globals.css'
import Layout from '@/src/components/Layout'
import Userstate from '@/context/userstate'

export default function App({ Component, pageProps }) {
  return (
    <Userstate>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </Userstate>
  )
}
