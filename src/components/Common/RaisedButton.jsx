import React from "react";
import styled from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

const StyledRaisedWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 25px;
  border-radius: 10px;
  outline:none;
  border-width:0;
  background:none;
  transition: background-color .3s;
  &:hover {
    background-color: ${defaultTheme.colors.primaryLayoutLight};
  }
`;

const RaisedButton = ({ children, ...restProps }) => {
  return <StyledRaisedWrapper {...restProps}>{children}</StyledRaisedWrapper>;
};

export default RaisedButton;
