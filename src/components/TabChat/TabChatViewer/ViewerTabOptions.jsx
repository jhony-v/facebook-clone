import React, { useEffect, useState } from "react";
import {  StyledFlexSearch, StyledTabOptionSearch } from "./elements";

const ViewerTabOptions = ({ initialId, children, onOptionSelected }) => {
  const [selectedId, setSelected] = useState(initialId);

  /**
   * Active event onOptionSelected if the event property exists
   */
  useEffect(() => {
    onOptionSelected && onOptionSelected(selectedId);
  }, [selectedId, onOptionSelected]);

  return (
    <StyledFlexSearch>
      {React.Children.map(children, (e) =>
        React.cloneElement(e, {
          selected: selectedId === e.props.optionId,
          onClick: () => setSelected(e.props.optionId),
        })
      )}
    </StyledFlexSearch>
  );
};

// Component item selected
ViewerTabOptions.Option = React.memo(
  ({ text,optionId, ...restProps }) => (
    <StyledTabOptionSearch {...restProps} optionId={optionId}>{text}</StyledTabOptionSearch>
  )
);

export default ViewerTabOptions;
