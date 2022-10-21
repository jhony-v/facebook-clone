import React, { FC, PropsWithChildren } from "react";
import { styled } from "../config/stitches.config";

const StyledContent = styled("div", {
  marginTop: "$from-header",
  backgroundColor: "$light",
  width: "$full"
});

const Content: FC<PropsWithChildren<{}>> = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

export default Content;
