import React, { Fragment, useCallback, useEffect, useState } from "react";
import { StyledFlexSearch, StyledTabOptionSearch } from "./elements";

type TabOptionsTypes = {
  initialId: string | number;
  children: JSX.Element;
  onSelectedOption: (selectedId: string | number) => void;
  style?: React.CSSProperties;
};
const TabOptions = ({
  initialId,
  children,
  onSelectedOption,
  style
}: TabOptionsTypes) => {
  const [selectedId, setSelected] = useState<string | number>(initialId);

  // Active event onOptionSelected if the event property exists
  const selected = useCallback(() => {
    onSelectedOption && onSelectedOption(selectedId as string);
  }, [selectedId, onSelectedOption]);

  useEffect(() => {
    selected();
  }, [selected]);

  // Verify is the children is a fragment or not
  const crossChildren =
    children.type === Fragment ? children.props.children : children;

  return (
    <StyledFlexSearch style={style}>
      {React.Children.map(
        crossChildren,
        (e: React.ReactElement<OptionTypes & { selected: boolean }>) =>
          React.cloneElement(e, {
            selected: selectedId === e.props.optionId,
            onClick: () => setSelected(e.props.optionId)
          })
      )}
    </StyledFlexSearch>
  );
};

type OptionTypes = {
  text?: string;
  optionId: string | number;
} & React.HTMLAttributes<{}>;

// Component item selected
TabOptions.Option = React.memo(
  ({ text, optionId, ...restProps }: OptionTypes) => (
    <StyledTabOptionSearch
      {...restProps}
      optionId={optionId}
      data-testid={optionId}
    >
      {text}
    </StyledTabOptionSearch>
  )
);

export default TabOptions;
