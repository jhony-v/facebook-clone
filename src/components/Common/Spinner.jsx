import styled, { css, keyframes } from "styled-components";

const spinnerAnimation = keyframes`
    from {
        transform:rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin: 1em auto;
  border: 2px solid transparent;
  animation: ${spinnerAnimation} s infinite linear;
  ${({ theme: { colors } }) => css`
    border-left-color: colors.primary;
    border-bottom-color: colors.primary;
  `}
`;

export default Spinner;
