import React from "react";
import styled, { css } from "styled-components";

const defineVariantTextLabel = (key, value) => {
  return css`
    color: ${({ theme, variant }) => variant === key && theme.colors[value]};
  `;
};

export const StyledTextLabel = styled.span`
  color: ${(props) => props.theme.colors.primaryText};
  display: ${(props) => props.block && "block"};
  ${defineVariantTextLabel("primary", "primary")};
  ${defineVariantTextLabel("smooth", "primaryTextLight")};
`;

const TextLabel = ({ children, variant }) => {
  return <StyledTextLabel variant={variant}>{children}</StyledTextLabel>;
};

export default TextLabel;
