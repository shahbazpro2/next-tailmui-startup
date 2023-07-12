import { ThemeProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import theme from 'theme'

import FeedbackWrapper from '@components/wrapper/FeedbackWrapper'
import Head from 'next/head'
import { useEffect } from 'react';
import Layout from '@common/Layout'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <meta name="theme-color" content="#58ade0" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>

          <Layout>
            <Component {...pageProps} />
          </Layout>
          <FeedbackWrapper />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MyApp
