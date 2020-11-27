import React from "react";
import {render} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";

const customRender = (ui: any, options = {}) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, {
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
