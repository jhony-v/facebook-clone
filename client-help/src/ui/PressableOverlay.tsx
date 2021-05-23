import { styled } from "../lib/stitches.config";

const PressableOverlay = styled("div", {
  borderRadius: "6px",
  cursor : "pointer",
  display: "flex",
  alignItems: "center",
  transition: ".3s",
  padding : "7px 10px",
  variants: {
    hoverable: {
      true: {
        "&:hover": {
          backgroundColor: "$text200",
        },
      },
    },
    hovered : {
      true : {
        backgroundColor: "$text200",
      }
    },
    pressed: {
      true: {
        backgroundColor: "$primaryAlpha100",
        color : "$primary"
      },
    },
  },
});

export default PressableOverlay;
