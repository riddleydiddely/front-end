import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Layout } from '../components/layout'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <SessionProvider session={session}>
      <Layout title={""} >
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>)
}
