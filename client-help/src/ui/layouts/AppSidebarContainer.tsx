import React, { FC } from 'react'

import { styled } from "../../lib/stitches.config";

const Wrapper = styled("nav", {
  position: "fixed",
  bottom : 0,
  left : 0,
  background: "$bgLayout",
  height: "$sidebar-height",
  width: "$sidebar-width",
  boxShadow: "0 2px 4px rgba(0,0,0,.08)",
  display: "flex",
  boxSizing : "border-box",
});

const AppSidebarContainer : FC<React.ComponentPropsWithRef<typeof Wrapper>> = ({children,...restProps}) => {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

export default AppSidebarContainer
