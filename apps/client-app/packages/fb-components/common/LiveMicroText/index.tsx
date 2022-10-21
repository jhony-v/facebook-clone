import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: .7;
  }
`;

const StyledListMicroText = styled.span`
  background-color: ${(props) => props.theme.colors.vgDanger};
  font-size: ${(props) => props.theme.fontSizes[200]};
  animation: ${animation} 0.8s infinite linear alternate;
  padding: 4px;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
`;

const LiveMicroText = ({ live }: { live?: boolean }) =>
  live ? <StyledListMicroText>live</StyledListMicroText> : null;

LiveMicroText.defaultProps = {
  live: false
};

export default LiveMicroText;
