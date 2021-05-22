import { createCss } from "@stitches/react";

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      bg : "white",
    },
    sizes: {
      "header-height" : "55px",
      "sidebar-height" : "var(100% - $header-navigator)",  
      "sidebar-width" : "200px",  
      "content-height" : "var(100% - $header-navigator)",  
      "content-width" : "var(100% - $sidebar-width)",  
      "full" : "100%",
    },
    space: {
      "from-header" : "var(--sizes-header-height)"
    }
  },
});


export const darkTheme = theme({
  colors: {
    bg : "black",
  },
});

