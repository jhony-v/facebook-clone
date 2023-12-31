import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel, { TextLabelTypes } from "@fb-components/common/TextLabel";

type StyledTabOptionSearchTypes = {
  selected?: boolean;
  optionId?: string | number;
};
// Style tab option
export const StyledTabOptionSearch = styled(TextLabel).attrs<
  TextLabelTypes,
  TextLabelTypes
>({
  weight: true,
  block: true,
  textSize: 400
})<StyledTabOptionSearchTypes>`
  text-align: center;
  border-bottom: 3px solid transparent;
  color: ${(props) => props.selected && props.theme.colors.vgPrimary};
  border-bottom-color: ${(props) => props.selected && "currentColor"};
  padding: 15px 10px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.vgBlackAlpha10};
  }
`;

// Style container tabs
export const StyledFlexSearch = styled(FlexWrapper)`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;
