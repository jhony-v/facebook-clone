import { createCss } from "@stitches/react";

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      bg: "#FFFFFF",
      bg100 : "#FFFFFF",
      bgWhite : "#FFFFFF",
      primary: "#1877F2",
      primaryAlpha100: "rgba(107, 171, 245, 0.2)",
      text: "#000000",
      textWhite : "#FFFFFF",
      text100: "#FFFFFF",
      text200: "#F0F2F5",
      text300: "#E4E6EB",
      text400: "#BCC0C4",
      text500: "#65676B",
    },
    sizes: {
      "header-height": "55px",
      "sidebar-height": "calc(100% - $header-height)",
      "sidebar-width": "360px",
      "content-center-10" : "765px",
      "content-height": "calc(100% - $header-height)",
      "content-width": "calc(100% - $sidebar-width)",
      full: "100%",
    },
    space: {
      "from-header": "var(--sizes-header-height)",
    },
  },
  utils: {
    mx: (_config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (_config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (_config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (_config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (_config) => (value) => ({
      width: value,
      height: value,
    }),
    alignment: (_config) => (value) => {
      if (value === "center") {
        return {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        };
      }
      return {};
    },
    linearGradient: (_config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const darkTheme = theme("dark",{
  colors: {
    bg: "rgb(30,30,30)",
    bg100 : "rgb(40,40,40)",
    primaryAlpha100: "rgba(107, 171, 245, 0.2)",
    text: "#FFFFFF",
    textWhite : "#FFFFFF",
    text100: "rgb(200,200,200)",
    text200: "rgb(70,70,70)",
    text300: "rgb(130,130,130)",
    text400: "rgb(200,200,200)",
    text500: "rgb(240,240,240)",
  },
});