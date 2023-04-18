import { FCWithChildren } from "@utils/types";
import { styled } from "../config/stitches.config";

const StyledContent = styled("div", {
  marginTop: "$from-header",
  backgroundColor: "$light",
  width: "$full"
});

const Content: FCWithChildren = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

export default Content;
