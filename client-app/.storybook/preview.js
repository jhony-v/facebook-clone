import { ThemeProvider } from "styled-components"
import * as nextRouter from 'next/router'
import theme from "@theme"
import { RecoilRoot } from "recoil";
import GlobalStyles from "../packages/fb-components/application/GlobalStyles";

nextRouter.useRouter = () => ({
  route: "/",
  pathname: "/about",
  query: { query: 'Next.js Storybook' },
  asPath: "",
  basePath: "",
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Story/>
      </ThemeProvider>
    </RecoilRoot>
  )
]