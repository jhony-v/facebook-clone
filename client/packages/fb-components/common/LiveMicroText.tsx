import React from "react";
import styled from "styled-components";

const StyledListMicroText = styled.div`
  background-color: ${(props) => props.theme.colors.vgDanger10};
  padding: 10px;
  border-radius:5px;
  color: white;
  text-transform: uppercase;
`;

const LiveMicroText = () => {
  return <StyledListMicroText>live</StyledListMicroText>;
};

export default LiveMicroText;
