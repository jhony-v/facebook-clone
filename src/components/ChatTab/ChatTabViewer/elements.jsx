import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";

export const StyledRowItem = styled(FlexWrapper).attrs({
  align: "center",
})`
  padding: 10px;
  border-radius: 10px;
  margin: 10px 10px 0px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const StyledInputSearch = styled.input`
  background: none;
  outline: none;
  border-width: 0;
  width: 100%;
  margin-left: 5px;
`;

// Style tab option
export const StyledTabOptionSearch = styled(TextLabel).attrs({
  weight: true,
  block: true,
  textSize: "1rem",
  variant: "smooth",
})`
  text-align: center;
  border-bottom: 3px solid transparent;
  color: ${(props) => props.selected && props.theme.colors.primary};
  border-bottom-color: ${(props) => props.selected && "currentColor"};
  padding: 15px 10px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
`;

// Style container tabs
export const StyledFlexSearch = styled(FlexWrapper)`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;
