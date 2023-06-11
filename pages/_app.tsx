import dotenv from 'dotenv'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load environment variables
    dotenv.config()
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default MyApp
