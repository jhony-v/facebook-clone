import { createCss } from "@stitches/react";

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      bg : "white",
      primary : "#1877F2",
      primaryAlpha100 : "rgba(107, 171, 245, 0.849)",
      text : "#000000",
      text100 : "#FFFFFF",
      text200 : "#F0F2F5",
      text300 : "#E4E6EB",
      text400 : "#BCC0C4",
      text500 : "#65676B",
    },
    sizes: {
      "header-height" : "50px",
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

