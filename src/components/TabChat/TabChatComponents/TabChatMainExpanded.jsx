import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";

const StyledTabChatMainExpanded = styled.div`
  border-radius: 10px 10px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .15);
  background-color: ${({ theme }) => theme.colors.primaryLayout};
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10%;
  height: 480px;
  width:350px;
  display:flex;
`;

export const StyledTabChatFillWrapper = styled(FlexWrapper).attrs({
  fDirection: "column",
})`
  width: 100%;
  height:100%;
`;


const TabChatMainExpanded = ({ children }) => {
  return <StyledTabChatMainExpanded>
    <StyledTabChatFillWrapper>
      {children}
    </StyledTabChatFillWrapper>
  </StyledTabChatMainExpanded>;
};

export default TabChatMainExpanded;
