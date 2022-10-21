import React from "react";
import styled, { css } from "styled-components";

export type AvatarTypes = StyledAvatarTypes &
  StyledAvatarWrapperTypes &
  React.ImgHTMLAttributes<{}>;

export type StyledAvatarTypes = {
  dimension?: string;
  isFeature?: boolean;
};

const defaultSize = "40px";
const StyledAvatar = styled.img<StyledAvatarTypes>`
  border-radius: 100%;
  object-fit: cover;
  display: block;
  -webkit-user-drag: none;
  width: ${(props) => props.dimension || defaultSize};
  height: ${(props) => props.dimension || defaultSize};
  ${(props) =>
    props.isFeature &&
    css`
      border: 4px solid ${props.theme.colors.vgPrimary};
    `}
`;

export type StyledAvatarWrapperTypes = {
  isOnline?: boolean;
};

const StyledAvatarWrapper = styled.div<StyledAvatarWrapperTypes>`
  display: inline-flex;
  ${(props) =>
    props.isOnline &&
    css`
      position: relative;
      &::after {
        content: "";
        width: 6px;
        height: 6px;
        right: 0;
        bottom: 1px;
        border: 2px solid white;
        background-color: ${props.theme.colors.vgOnline};
        position: absolute;
        border-radius: 100%;
      }
    `}
`;

const Avatar = ({ isOnline, isFeature, ...restProps }: AvatarTypes) => {
  if (isOnline) {
    return (
      <StyledAvatarWrapper isOnline>
        <StyledAvatar {...restProps} isFeature={isFeature} />
      </StyledAvatarWrapper>
    );
  }
  return <StyledAvatar {...restProps} isFeature={isFeature} />;
};

export default Avatar;
