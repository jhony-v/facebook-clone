import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { FCWithChildren } from "@utils/types";
import theme from "./theme/index";

const Wrapper: FCWithChildren = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: any, options = {}) =>
  render(ui, {
    wrapper: Wrapper,
    ...options
  });

export * from "@testing-library/react";
export { customRender as render };
