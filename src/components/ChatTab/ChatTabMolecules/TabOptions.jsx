import React, { Fragment, useCallback, useEffect, useState } from "react";
import {  StyledFlexSearch, StyledTabOptionSearch } from "./elements";

const TabOptions = ({ initialId, children, onSelectedOption }) => {
  const [selectedId, setSelected] = useState(initialId);

  // Active event onOptionSelected if the event property exists
  const selected = useCallback(() => {
    onSelectedOption && onSelectedOption(selectedId);
  },[selectedId,onSelectedOption]); 

  useEffect(() => {
    selected();
  }, [selected]);

  // Verify is the children is a fragment or not
  const crossChildren = children.type === Fragment ? children.props.children : children; 

  return (
    <StyledFlexSearch>
      {React.Children.map(crossChildren, (e) =>
        React.cloneElement(e, {
          selected: selectedId === e.props.optionId,
          onClick: () => setSelected(e.props.optionId),
        })
      )}
    </StyledFlexSearch>
  );
};

// Component item selected
TabOptions.Option = React.memo(
  ({ text,optionId, ...restProps }) => (
    <StyledTabOptionSearch 
      {...restProps} 
      optionId={optionId}
      data-testid={optionId}
      >{text}</StyledTabOptionSearch>
  )
);

export default TabOptions;