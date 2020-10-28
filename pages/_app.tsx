import theme from "@theme/index"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "@fb-components/GlobalStyles"
import { AppProps } from "next/app"

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
