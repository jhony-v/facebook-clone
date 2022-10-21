import styled, { css, keyframes } from "styled-components";
import Wrapper from "../Wrapper";

const defaultSize = "40px";
const animation = keyframes`
  from {
    background-position:400% 0%;
  }
`;

export type SkeletonTypes = {
  dimension?: string;
  w?: string;
  h?: string;
  type?: "rect" | "circle";
  inline?: boolean;
  r?: number;
};

const Skeleton = styled(Wrapper)<SkeletonTypes>`
  display: ${(props) => props.inline && "inline-block"};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.vgBlackAlpha20} 0%,
    ${(props) => props.theme.colors.vgBlackAlpha12},
    ${(props) => props.theme.colors.vgBlackAlpha20} 100%
  );
  background-size: 400% 100%;
  animation: ${animation} 4s linear infinite;

  ${(props) =>
    props.type === "rect" &&
    css`
      height: ${props.h};
      width: ${props.w};
      border-radius: ${props.r || 4}px;
    `}
  ${(props) =>
    props.type === "circle" &&
    css`
      width: ${props.dimension || defaultSize};
      height: ${props.dimension || defaultSize};
      border-radius: 100%;
    `}
`;

export default Skeleton;
