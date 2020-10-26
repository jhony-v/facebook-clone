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
      width: 7px;
      height: 7px;
      right:4px;
      bottom:2px;
      background-color: #00e676;
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
