
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import theme from '../theme'
import { Provider } from "react-redux"
import { useStore } from 'redux/store'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return <StyledEngineProvider injectFirst>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />

        </Provider>

      </ThemeProvider>
    </QueryClientProvider>
  </StyledEngineProvider>
}

export default MyApp
