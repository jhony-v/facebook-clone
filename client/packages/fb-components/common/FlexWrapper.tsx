import styled, { css } from "styled-components";

export type FlexWrapperTypes = {
  w?: string;
  h?: string;
  flexDirection?: string;
  align?: string;
  justify?: string;
  centerBetween?: boolean;
};

const FlexWrapper = styled.div<FlexWrapperTypes>`
  display: flex;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};

  ${(props) =>
    props.centerBetween &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
`;

export default FlexWrapper;
