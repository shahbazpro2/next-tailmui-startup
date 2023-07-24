import { ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material';
import '../styles/globals.css';
import theme from 'theme';

import FeedbackWrapper from '@components/wrapper/FeedbackWrapper';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '@common/Layout';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import { company } from '@components/config/company/Details';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#58ade0" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CookieConsent
            location="bottom"
            buttonText="ACCEPT"
            cookieName={company.cookies_name}
            style={{ background: '#FBE200' }}
            buttonStyle={{
              background: 'green',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 'bold',
            }}
            expires={150}
          >
            <span className="text-black">
              We are using cookies to give you the best experience on our
              website. You can find out more about our cookie policy
            </span>
            <Link href="/legal/policy/cookie">
              <a className="text-primary font-bold"> here.</a>
            </Link>
          </CookieConsent>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <FeedbackWrapper />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
