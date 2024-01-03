import { styled } from "../lib/stitches.config";

const FloatingCard = styled("div", {
  position: "fixed",
  background: "$bg100",
  boxShadow: "0 10px 20px rgba(0,0,0,.13)",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  variants: {
    position: {
      "top-left": {
        top: "40px",
        left: "40px",      
      },
      "top-right": {
        top: "40px",
        right: "40px",      
      },
      "bottom-left": {
        bottom: "40px",
        left: "40px",      
      },
      "bottom-right": {
        bottom: "40px",
        right: "40px",      
      },
    },
  },
});

export default FloatingCard;
