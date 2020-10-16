import React, { useCallback } from "react";
import ViewerListRowItems from "./TabChatViewer/ViewerListRowItems";
import ViewerSearchInput from "./TabChatViewer/ViewerSearchInput";
import { actionSearch } from "./Context/TabChatReducer";
import { useTabChatContext } from "./Context/TabChatContext";
import ViewerTabOptions from "./TabChatViewer/ViewerTabOptions";
import ErrorComponent from "../Common/ErrorComponent";

/**
 * Input to search in the list
 */
export const SearchInput = () => {
  const { state , action, onSearch } = useTabChatContext();
  return <ViewerSearchInput onKeyUp={(e) => {
    const value = e.target.value;
    const validationOnSearch = onSearch(state.data,value);
    action(actionSearch(
      validationOnSearch,
      value
    ))
  }} />
  
};

/**
 * Options to filter by id
 */
export const RenderOptions = ({ children }) => {
  const { state, onOptionSelected } = useTabChatContext();
  const onSelectedOption = useCallback((e) => onOptionSelected(e) , [onOptionSelected]);

  return !state.searching && (
    <ViewerTabOptions initialId={state.filterOptionsInitial} onSelectedOption={onSelectedOption}>
      {children(state.filterOptions)}
    </ViewerTabOptions>
  );
};

/**
 * Render list items
 */
export const RenderList = ({ children }) => {
  const { state } = useTabChatContext();
  return <ErrorComponent>
    <ViewerListRowItems data={state.data} render={(e, i) => children(e,i)} />
  </ErrorComponent>
};
