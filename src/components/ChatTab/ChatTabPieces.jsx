import React, { useCallback } from "react";
import ListRenderItems from "../Common/ListRenderItems";
import SearchInput from "./Molecules/SearchInput";
import { actionSearch, actionSelectFilter } from "./Context/ChatTabReducer";
import { useChatTabContext } from "./Context/ChatTabContext";
import TabOptions from "./Molecules/TabOptions";
import ErrorComponent from "../Common/ErrorComponent";

/**
 * Input to search in the list
 */
export const RenderSearchInput = () => {
  const { state, action, onSearch } = useChatTabContext();
  return (
    <SearchInput onKeyUp={(e) => {
        const value = e.target.value;
        const filterValue = onSearch(state.data, value);
        action(actionSearch({value,filterValue}));
      }}
    />
  );
};

/**
 * Options to filter by id
 */
export const RenderOptions = ({ children }) => {
  const { state, onOptionSelected, action } = useChatTabContext();
  const onSelectedOption = useCallback((selectedFilterOption) => {
    onOptionSelected({ optionId : selectedFilterOption, fillData : ( data ) => {
        action(actionSelectFilter({selectedFilterOption,data}))
      }})
    },
    [onOptionSelected,action]
  );

  return (
    !state.searching && (
      <TabOptions initialId={state.selectedFilterOption} onSelectedOption={onSelectedOption}>
        {children(state.filterOptions)}
      </TabOptions>
    )
  );
};

/**
 * Render list items
 */
export const RenderList = ({ children }) => {
  const { state } = useChatTabContext();

  return (
    <ErrorComponent>
      <ListRenderItems 
      data={state.data} 
      renderHeight={70} 
      render={(item, options) => children(item, options)} />
    </ErrorComponent>
  );
};
