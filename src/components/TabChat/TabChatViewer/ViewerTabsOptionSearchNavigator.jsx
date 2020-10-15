import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";

const ViewerTabsOptionSearchNavigator = ({initialId,children,onTabSelected}) => {
  const [ selectedId , setSelected ] = useState(initialId);
  useEffect( () => {
    onTabSelected && onTabSelected(selectedId);
  },[selectedId,onTabSelected]);

  return (
    <StyledFlexSearch>
      {React.Children.map(children,e => (
          React.cloneElement(e,{
            selected : selectedId === e.props.optionId,
            onClick : () => setSelected(e.props.optionId), 
          })
      ))}
    </StyledFlexSearch>
  );
};

ViewerTabsOptionSearchNavigator.Option = React.memo(({text,...restProps}) => (
  <StyledTabOptionSearch {...restProps} >{text}</StyledTabOptionSearch>
))


const StyledTabOptionSearch = styled(TextLabel).attrs({
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

const StyledFlexSearch = styled(FlexWrapper)`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow:0 10px 20px rgba(0,0,0,.05);
`;

export default ViewerTabsOptionSearchNavigator;
