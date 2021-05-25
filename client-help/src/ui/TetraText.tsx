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
  },
  defaultVariants : {
    color : "base"
  }
});

export default TetraText;
