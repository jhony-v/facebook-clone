import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
    from {
      transform:rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  flex: none;
  border-radius: 100%;
  margin: auto;
  border: 3px solid transparent;
  animation: 0.3s ${spinnerAnimation} infinite linear reverse;
  border-left-color: ${(props) => props.theme.colors.vgPrimary};
`;

export default Spinner;
