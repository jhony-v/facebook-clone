import React from "react";
import styled, { css } from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

const defaultSize = "40px";

const StyledAvatar = styled.img`
  border-radius: 100%;
  object-fit: cover;
  display:block;
  -webkit-user-drag: none;
  width: ${(props) => props.dimension || defaultSize};
  height: ${(props) => props.dimension || defaultSize};
  ${(props) => props.isFeature && css`
      border: 4px solid ${defaultTheme.colors.primary};
  `}
`;

const StyledAvatarWrapper = styled.div`
  display:inline-flex;
  ${props => props.isOnline && css`
    position:relative;
    &::after {
      content: "";
      width: 6px;
      height: 6px;
      right:0;
      bottom:1px;
      border:2px solid white;
      background-color: #26963c;
      position:absolute;
      border-radius:100%;
    }
  `}
`

const Avatar = ({ isOnline, isFeature, ...restProps }) => {
  if (isOnline) return (
      <StyledAvatarWrapper isOnline>
        <StyledAvatar {...restProps} isFeature={isFeature} />
      </StyledAvatarWrapper>
  )
  return <StyledAvatar {...restProps} isFeature={isFeature} />;
};

export default Avatar;
