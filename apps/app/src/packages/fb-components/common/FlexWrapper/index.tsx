import styled, { css } from "styled-components";
import React from "react";

export type FlexWrapperTypes = {
  w?: string;
  h?: string;
  flexDirection?: React.CSSProperties["flexDirection"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
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
