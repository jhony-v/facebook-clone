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
  color: ${defaultTheme.colors.primaryTextDark};
  display: ${(props) => props.block && "block"};
  text-align:${props => props.textAlign};
  ${defineVariantTextLabel("primary", "primary")};
  ${defineVariantTextLabel("light", "primaryLayout")};
  ${defineVariantTextLabel("smooth", "primaryTextLight")};
  ${defineVariantTextLabel("dark", "primaryTextDark")};
`;

export default TextLabel;
