import React from "react";
import { StyledTabChatFillWrapper, StyledTabChatMainExpanded } from "./elements";

const TabChatMainExpanded = ({ children }) => {
  return (
    <StyledTabChatMainExpanded>
      <StyledTabChatFillWrapper>{children}</StyledTabChatFillWrapper>
    </StyledTabChatMainExpanded>
  );
};

export default TabChatMainExpanded;
