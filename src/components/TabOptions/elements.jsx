import styled from "styled-components";
import FlexWrapper from "../Common/FlexWrapper";
import TextLabel from "../Common/TextLabel";
import defaultTheme from "../../theme/defaultTheme";

// Style tab option
export const StyledTabOptionSearch = styled(TextLabel).attrs({
    weight: true,
    block: true,
    textSize: "1rem",
    variant: "smooth",
  })`
    text-align: center;
    border-bottom: 3px solid transparent;
    color: ${(props) => props.selected && defaultTheme.colors.primary};
    border-bottom-color: ${(props) => props.selected && "currentColor"};
    padding: 15px 10px;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color:${defaultTheme.colors.primaryLayoutLight};
    }
`;

// Style container tabs
export const StyledFlexSearch = styled(FlexWrapper)`
border-top: 1px solid rgba(0, 0, 0, 0.05);
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;