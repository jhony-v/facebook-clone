import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@fb-components/application/GlobalStyles";
import "@fb-services/routerEvents/NProgressChangeRoute";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
