import React from "react";
import styled from "styled-components";

const StyledCircleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, colorIcon }) => theme.theme.colors[colorIcon]};
`;


const CircleButton = ({children, ...restProps }) => {
  return (
    <StyledCircleButton {...restProps}>
      {children}
    </StyledCircleButton>
  );
};

export default CircleButton;
