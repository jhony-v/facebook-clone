import { styled } from "../lib/stitches.config";

const PressableOverlay = styled("div", {
  display: "flex",
  alignItems: "center",
  transition: "backgroundColor .3s",
  borderRadius: "6px",
  boxSizing : "border-box",
  "@min2" : {
    cursor: "pointer",
  },
  color : "$text",
  variants: {
    hoverable: {
      true: {
        "&:hover": {
          backgroundColor: "$text200",
        },
      },
    },
    hovered: {
      true: {
        backgroundColor: "$text200",
      },
    },
    pressed: {
      true: {
        backgroundColor: "$primaryAlpha100",
        color: "$primary",
      },
    },
    spacing: {
      small: {
        padding: "7px 10px",
      },
      base: {
        padding: "10px 10px",
      },
      medium: {
        padding: "13px 10px",
      },
    },
  },
  compoundVariants: [
    {
      pressed: "true",
      hoverable: "true",
      css: {
        backgroundColor: "$primaryAlpha100",
        color: "$primary",
        "&:hover": {
          backgroundColor: "$primaryAlpha100",
        },
      },
    },
  ],
  defaultVariants: {
    spacing: "small",
  },
});

export default PressableOverlay;
