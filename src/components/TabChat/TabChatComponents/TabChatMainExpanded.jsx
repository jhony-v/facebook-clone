import React from "react";
import styled from "styled-components";

const StyledTabChatMainExpanded = styled.div`
  border-radius: 10px 10px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .15);
  background-color: ${({ theme }) => theme.colors.primaryLayout};
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10%;
  height: 400px;
  width:300px;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: min-content 1fr;
  overflow:hidden;
`;

const TabChatMainExpanded = ({ children }) => {
  return <StyledTabChatMainExpanded>{children}</StyledTabChatMainExpanded>;
};

export default TabChatMainExpanded;
