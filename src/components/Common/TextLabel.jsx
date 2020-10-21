import styled, { css } from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

const defineVariantTextLabel = (key, value) => {
  return css`
    color: ${({ variant }) => variant === key && defaultTheme.colors[value]};
  `;
};

const TextLabel = styled.span`
  font-family: Arial;
  font-size: ${(props) => props.textSize};
  font-weight: ${(props) => props.weight && "bold"};
  color: ${defaultTheme.colors.primaryText};
  display: ${(props) => props.block && "block"};
  ${defineVariantTextLabel("primary", "primary")};
  ${defineVariantTextLabel("smooth", "primaryTextLight")};
`;

export default TextLabel;
