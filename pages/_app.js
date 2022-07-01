import { ThemeProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import { theme } from '../theme'
import FeedbackWrapper from '@components/wrapper/FeedbackWrapper'

function MyApp({ Component, pageProps }) {
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <FeedbackWrapper>
        <Component {...pageProps} />
      </FeedbackWrapper>
    </ThemeProvider>
  </StyledEngineProvider>
}

export default MyApp
