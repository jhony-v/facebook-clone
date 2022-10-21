import React, { FC, PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";

const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: any, options = {}) =>
  render(ui, {
    wrapper: Wrapper,
    ...options
  });

export * from "@testing-library/react";
export { customRender as render };
