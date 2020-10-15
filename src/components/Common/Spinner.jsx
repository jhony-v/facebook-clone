import styled, { css, keyframes } from "styled-components";

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
  margin: 1in auto;
  border: 3px solid transparent;
  animation: 0.3s ${spinnerAnimation} infinite linear reverse;
  ${({ theme: { colors } }) => css`
    border-left-color: ${colors.primary};
    border-bottom-color: ${colors.primary};
  `}
`;

export default Spinner;
