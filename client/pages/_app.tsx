import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@fb-components/application/GlobalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyles />
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
  );
}

export default App;
