import theme from "@theme/index";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "@fb-components/application/GlobalStyles";
import {RecoilRoot} from "recoil";
import {AppProps} from "next/dist/next-server/lib/router/router";


function App({Component, pageProps}: AppProps) {
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
