import { createCss } from "@stitches/react";

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      primary: "red",
    },
  },
});

export const darkTheme = theme({
  colors: {},
});
