import React from "react";
import styled from "styled-components";

const StyledRaisedWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  border-radius: 10px;
  outline:none;
  border-width:0;
  background:none;
  transition: background-color .3s;
  &:hover {
    background-color: ${props => props.theme.colors.vgBlackAlpha10};
  }
`;


export type RaisedButtonProps = {
  children : React.ReactNode
}
 & React.ButtonHTMLAttributes<{}>

const RaisedButton = ({ children, ...restProps } : RaisedButtonProps) => {
  return <StyledRaisedWrapper {...restProps}>{children}</StyledRaisedWrapper>;
};

export default RaisedButton;
