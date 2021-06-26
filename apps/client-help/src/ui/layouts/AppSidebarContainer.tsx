import React, { FC } from 'react'

import { styled } from "../../lib/stitches.config";

const Wrapper = styled("nav", {
  position: "fixed",
  bottom : 0,
  left : 0,
  background: "$bg100",
  height: "$sidebar-height",
  width: "$sidebar-width",
  boxShadow: "2px 2px 4px rgba(0,0,0,.1)",
  display: "flex",
  flexDirection : "column",
  boxSizing : "border-box",
});

const AppSidebarContainer : FC<React.ComponentPropsWithRef<typeof Wrapper>> = ({children, ...restProps}) => {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

export default AppSidebarContainer
