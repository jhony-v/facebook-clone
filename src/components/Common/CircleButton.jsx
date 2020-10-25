import React from "react";
import styled from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

const defaultSize = "50px";

const StyledCircleButton = styled.button`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  outline: none;
  background-color: ${props => defaultTheme.colors.primaryButtonNeutral};
  width: ${(props) => props.dimension || defaultSize};
  height: ${(props) => props.dimension || defaultSize};
  color: ${({ colorIcon }) => defaultTheme.colors[colorIcon]};
`;

const CircleButton = ({ children, ...restProps }) => {
  return <StyledCircleButton {...restProps}>{children}</StyledCircleButton>;
};

export default CircleButton;
