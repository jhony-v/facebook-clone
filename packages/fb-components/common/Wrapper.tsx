import styled from "styled-components";

export type WrapperTypes = {
  p?: string;
  m?: string;
  h?: string;
  w?: string;
  flexNone?: boolean;
};

const Wrapper = styled.div<WrapperTypes>`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  flex: ${(props) => props.flexNone && "none"};
`;

export default Wrapper;