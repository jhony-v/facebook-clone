import { styled } from "../lib/stitches.config";

const TetraText = styled("span", {
  fontWeight: "bold",
  fontSize : ".95rem",
  variants: {
    color: {
      primary: {
        color: "$primary",
      },
      secondary: {
        color: "$text500",
      },
      base: {
        color: "$text",
      },
    },
    size : {
      base : {
        fontSize : ".95rem",
      },
      medium : {
        fontSize : "1.6rem",
      },
      large : {
        fontSize : "2rem",
      }
    },
  },
  defaultVariants : {
    color : "base",
    size : "base"
  }
});

export default TetraText;
