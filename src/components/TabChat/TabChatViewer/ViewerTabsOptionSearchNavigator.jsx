import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";

const StyledTabOptionSearch = styled(TextLabel).attrs({
  weight: true,
  block: true,
  fontSize: "1rem",
  variant: "smooth",
})`
  text-align: center;
  border-bottom: 3px solid transparent;
  color: ${(props) => props.selected && props.theme.colors.primary};
  border-bottom-color: ${(props) => props.selected && "currentColor"};
  padding: 15px 10px;
  width: 100%;
  transition: 0.3s;
`;

const StyledFlexSearch = styled(FlexWrapper)`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ViewerTabsOptionSearchNavigator = () => {
  return (
    <StyledFlexSearch>
      <StyledTabOptionSearch selected>amigos</StyledTabOptionSearch>
      <StyledTabOptionSearch>en linea</StyledTabOptionSearch>
    </StyledFlexSearch>
  );
};

export default ViewerTabsOptionSearchNavigator;
