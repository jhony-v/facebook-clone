import styled, { css } from "styled-components";

export type WrapperTypes = {
  p?: string;
  m?: string;
  h?: string;
  w?: string;
  flexNone?: boolean;
  inlineBlock?: boolean;
  absolute?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
};

const Wrapper = styled.div<WrapperTypes>`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  flex: ${(props) => props.flexNone && "none"};
  display: ${(props) => props.inlineBlock && "inline-block"};
  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
      left: ${absolute.left};
      right: ${absolute.right};
      top: ${absolute.top};
      bottom: ${absolute.bottom};
    `}
`;

export default Wrapper;
