import { styled } from "../config/stitches.config";

const Button = styled("button", {
  borderRadius: "6px",
  fontWeight: "bold",
  padding: "5px 10px",
  transition: ".3s background-color",
  fontSize: "14px",
  cursor: "pointer",
  variants: {
    variant: {
      default: {
        "&:hover": {
          backgroundColor: "$hover-overlay"
        }
      },
      light: {
        backgroundColor: "$light",
        color: "$black"
      },
      primary: {
        backgroundColor: "$blue60",
        color: "$light"
      },
      neutral: {
        backgroundColor: "$hover-overlay",
        color: "$black",
        "&:hover": {
          backgroundColor: "$media-hover"
        }
      }
    },
    circle: {
      medium: {
        width: "45px",
        height: "45px",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export default Button;
