import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: .5;
  }
`;

const StyledListMicroText = styled.div`
  background-color: ${(props) => props.theme.colors.vgDanger10};
  padding: 10px;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  animation: ${animation} 0.3s infinite linear alternate;
`;

const LiveMicroText = () => {
  return <StyledListMicroText>live</StyledListMicroText>;
};

export default LiveMicroText;
