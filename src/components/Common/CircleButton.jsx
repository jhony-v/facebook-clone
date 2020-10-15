import React from "react";
import styled from "styled-components";

const defaultSize = "50px";

const StyledCircleButton = styled.button`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  outline: none;
  background-color: ${props => props.theme.colors.primaryButtonNeutral};
  width: ${(props) => props.sizeAvatar || defaultSize};
  height: ${(props) => props.sizeAvatar || defaultSize};
  color: ${({ theme, colorIcon }) => theme.colors[colorIcon]};
`;

const CircleButton = ({ children, ...restProps }) => {
  return <StyledCircleButton {...restProps}>{children}</StyledCircleButton>;
};

export default CircleButton;
