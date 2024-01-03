export const themeBaseColors = {
  vgPrimary: "rgb(30,130,230)",
  vgPrimaryAlpha10: "#2196f0",
  vgBlackAlpha00: "#ffffff",
  vgBlackAlpha10: "rgb(243,243,243)",
  vgBlackAlpha12: "#eeeeee",
  vgBlackAlpha20: "#e0e0e0",
  vgBlackAlpha30: "#9e9e9e",
  vgBlackAlpha40: "#424242",
  vgBlackAlpha50: "rgb(30,30,30)",
  vgBlackAlpha60: "rgba(0, 0, 0, 0.02)",
  vgPage: "#F2F3F5"
};

export const themeBaseTextColors = {
  vgTextBlackAlpha00: "#ffffff",
  vgTextBlackAlpha10: "#e0e0e0",
  vgTextBlackAlpha20: "gray",
  vgTextBlackAlpha30: "#424242",
  vgTextBlack: "rgb(20,20,20)",
  vgTextPrimary: themeBaseColors.vgPrimary
};

export const themeBaseHelperColors = {
  vgDanger: "rgb(235,20,20)",
  vgDanger10: "rgba(240,80,80,1)",
  vgOnline: "#26963c"
};

const theme = {
  colors: {
    ...themeBaseColors,
    ...themeBaseTextColors,
    ...themeBaseHelperColors
  },
  fontSizes: {
    100: ".7rem",
    200: ".8rem",
    300: ".9rem",
    400: "1rem",
    600: "1.2rem",
    700: "1.5rem",
    800: "2rem"
  },
  layoutSizes: {
    heightNavigator: "60px",
    heightMainDrawer: "calc(100vh - 60px)",
    widthRightRail: "300px",
    widthLeftRail: "300px",
    widthStories: "650px",
    widthFeeds: "500px"
  }
};

export default theme;
