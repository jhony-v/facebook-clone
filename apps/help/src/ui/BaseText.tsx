import { styled } from "../lib/stitches.config";

const BaseText = styled("p", {
  margin: 0,
  padding: 0,
  variants: {
    weight: {
      true: {
        fontWeight: "bold",
      },
    },
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
    size: {
      base: {
        fontSize: "1rem",
      },
      small: {
        fontSize: ".8rem",
      },
      medium: {
        fontSize: "1.2rem",
      },
      large: {
        fontSize: "1.4rem",
      },
    },
  },
  defaultVariants: {
    color: "base",
  },
});

export default BaseText;
