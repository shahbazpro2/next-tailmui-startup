
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import theme from '../theme'
import FeedbackWrapper from '@components/wrapper/FeedbackWrapper'
import { apiResStructure } from 'use-hook-api'
apiResStructure.dataKey = 'data'
apiResStructure.errKey = 'message'
function MyApp({ Component, pageProps }) {
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>

      <Component {...pageProps} />

      <FeedbackWrapper />

    </ThemeProvider>
  </StyledEngineProvider>
}

export default MyApp
