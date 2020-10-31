import styled, { css, keyframes } from "styled-components";

const defaultSize = "40px";
const animation = keyframes`
  from {
    background-position:300% 0%;
  }
`;

export type SkeletonTypes = {
  dimension?: string;
  w?: string;
  h?: string;
  type?: "rectangle" | "circle";
};

const Skeleton = styled.div<SkeletonTypes>`
  display:inline-block;
  background:linear-gradient(
    to right,
    ${props => props.theme.colors.vgBlackAlpha12} 0%,
    ${props => props.theme.colors.vgBlackAlpha10},
    ${props => props.theme.colors.vgBlackAlpha12} 100%    
  );
  background-size:300% 100%;
  animation:${animation} 2s linear infinite;

  ${(props) => props.type === "rectangle" &&  css`
      height: ${props.h};
      width: ${props.w};
      border-radius: 4px;
  `}
  ${(props) =>  props.type === "circle" && css`
      width: ${props.dimension || defaultSize};
      height: ${props.dimension || defaultSize};
      border-radius: 100%;
  `}
`;

export default Skeleton;