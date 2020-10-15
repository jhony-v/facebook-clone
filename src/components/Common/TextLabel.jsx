import styled, { css } from "styled-components";

const defineVariantTextLabel = (key, value) => {
  return css`
    color: ${({ theme, variant }) => variant === key && theme.colors[value]};
  `;
};

const TextLabel = styled.span`
  font-family: Arial;
  font-size: ${(props) => props.textSize};
  font-weight: ${(props) => props.weight && "bold"};
  color: ${(props) => props.theme.colors.primaryText};
  display: ${(props) => props.block && "block"};
  ${defineVariantTextLabel("primary", "primary")};
  ${defineVariantTextLabel("smooth", "primaryTextLight")};
`;

export default TextLabel;
