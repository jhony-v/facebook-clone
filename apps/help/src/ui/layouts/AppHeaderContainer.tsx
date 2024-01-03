import React, { FC } from "react";
import { styled } from "../../lib/stitches.config";

const Wrapper = styled("header", {
  position: "fixed",
  top: "0",
  background: "$bg100",
  height: "$header-height",
  width: "$full",
  boxShadow: "0 2px 4px rgba(0,0,0,.08)",
  display: "flex",
  boxSizing : "border-box",
  alignItems: "center",
  zIndex : 20
});

const AppHeaderContainer: FC<React.ComponentPropsWithRef<typeof Wrapper>> = ({
  children,
  ...restProps
}) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default AppHeaderContainer;
