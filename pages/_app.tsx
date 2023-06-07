import dotenv from 'dotenv'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    // Load environment variables
    dotenv.config()
  }, [])
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer />
    </>
  )
}

export default MyApp
