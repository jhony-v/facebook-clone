import React from 'react'
import defaultTheme from "../src/theme/defaultTheme";
import { ThemeProvider } from "styled-components"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story/>
    </ThemeProvider>
  )
]