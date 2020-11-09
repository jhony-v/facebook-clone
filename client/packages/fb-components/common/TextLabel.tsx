import { ThemeBase } from "@theme/theme";
import styled from "styled-components";

export type TextLabelTypes = {
  textSize?: ThemeBase.FontSizesTypes;
  weight?: boolean;
  notWeight ?: boolean;
  block?: boolean;
  textAlign?: string;
  textColor ?: ThemeBase.ColorsTextTypes;
};

const TextLabel = styled.span<TextLabelTypes>`
  font-family: Arial;
  font-size: ${(props) => props.theme.fontSizes[props.textSize || 400]};
  color: ${props => props.theme.colors[props.textColor || "vgTextBlackAlpha20"]};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.weight && "bold"};
  font-weight: ${(props) => props.notWeight && "normal"};
  display: ${(props) => props.block && "block"};
`;

export default TextLabel;
