import React from "react";
import styled from "styled-components";

const StyledButtonCircle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, colorIcon }) => theme.theme.colors[colorIcon]};
`;

const ButtonCircleIconify = ({ icon: IconComponent, ...restProps }) => {
  return (
    <StyledButtonCircle {...restProps}>
      <IconComponent />
    </StyledButtonCircle>
  );
};

export default ButtonCircleIconify;
