import styled, { keyframes } from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

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
  border-left-color: ${defaultTheme.colors.primary};
  border-bottom-color: ${defaultTheme.colors.primary};
`;

export default Spinner;
