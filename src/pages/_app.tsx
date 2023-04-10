import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Layout } from '../components/layout'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // return <Component {...pageProps} />
  return <SessionProvider session={session}>
    <Layout title={""} >
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
}
