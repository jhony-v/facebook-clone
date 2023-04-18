import { ThemeBase } from "@theme/theme";
import styled from "styled-components";

export type TextLabelTypes = {
  textSize?: ThemeBase.FontSizesTypes;
  weight?: boolean | 200 | 300 | 400 | 500 | 600 | 700 | 900;
  block?: boolean;
  textAlign?: string;
  textColor?: ThemeBase.ColorsTextTypes;
};

const TextLabel = styled.span<TextLabelTypes>`
  font-family: Arial;
  font-size: ${(props) => props.theme.fontSizes[props.textSize || 400]};
  color: ${(props) =>
    props.theme.colors[props.textColor || "vgTextBlackAlpha20"]};
  text-align: ${(props) => props.textAlign};
  font-weight: ${({ weight }) => {
    if (weight) return typeof weight === "boolean" ? "bold" : weight;
    return null;
  }};
  display: ${(props) => props.block && "block"};
`;

export default TextLabel;
