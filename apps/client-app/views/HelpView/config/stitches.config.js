import { createStitches } from "@stitches/react";

export const { styled, getCssString, css } = createStitches({
  theme: {
    colors: {
      blue30: "#AAC9FF",
      blue40: "#77A7FF",
      blue60: "#1877F2",
      blue70: "#2851A3",
      black: "#000000",
      light: "#FFFFFF",
      "button-text": "#444950",
      "primary-text": "#1C1E21",
      "primary-icon": "#1C1E21",
      "secondary-tcon": "#606770",
      "secondary-text": "#606770",
      "hover-overlay": "rgba(0, 0, 0, 0.05)",
      "media-hover": "rgba(68, 73, 80, 0.15)",
      "card-background": "#FFFFFF"
    },
    sizes: {
      "header-navigator-h": "55px",
      "sidebar-navigator-h": "$header-navigator",
      full: "100%"
    },
    space: {
      "from-header": "var(--sizes-header-navigator-h)"
    }
  }
});
