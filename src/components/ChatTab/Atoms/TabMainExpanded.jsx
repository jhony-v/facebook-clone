import React from "react";
import { StyledTabChatFillWrapper, StyledTabChatMainExpanded } from "./elements";

const TabMainExpanded = ({ children }) => {
  return (
    <StyledTabChatMainExpanded>
      <StyledTabChatFillWrapper>{children}</StyledTabChatFillWrapper>
    </StyledTabChatMainExpanded>
  );
};

export default TabMainExpanded;
