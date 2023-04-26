import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Layout } from '../components/layout'
import { SessionProvider } from "next-auth/react"
import { LayoutDaisy } from '../components/layoutDaisy'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <SessionProvider session={session}>
      <LayoutDaisy title={""} >
        <Component {...pageProps} />
      </LayoutDaisy>
    </SessionProvider>)
}
