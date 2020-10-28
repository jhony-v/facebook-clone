import { ThemeBase } from "@theme/theme";
import styled from "styled-components";

export type TextLabelTypes = {
  textSize?: ThemeBase.FontSizesTypes;
  weight?: boolean;
  block?: boolean;
  textAlign?: string;
  textColor ?: ThemeBase.ColorsTextTypes;
};

const TextLabel = styled.span<TextLabelTypes>`
  font-family: Arial;
  font-size: ${(props) => props.theme.fontSizes[props.textSize || 400]};
  color: ${props => props.theme.colors[props.textColor || "vgTextBlackAlpha30"]};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.weight && "bold"};
  display: ${(props) => props.block && "block"};
`;

export default TextLabel;
