import React from "react";
import styled from "styled-components";
import FlexWrapper from "../Common/FlexWrapper";


const StyledTabChatMainExpanded = styled(FlexWrapper)`
  flex-direction: column;
  box-shadow:0 10px 20px rgba(0,0,0,.1);
  border-radius: 10px 10px 0 0;
  background-color:${({theme})=>theme.colors.primaryLayout};
  position:fixed;
  bottom:0;
  right:0;
  margin-right:20%;
  height:300px;
`;


const TabChatMainExpanded = ({ children }) => {
  return <StyledTabChatMainExpanded>{children}</StyledTabChatMainExpanded>;
};

export default TabChatMainExpanded;
