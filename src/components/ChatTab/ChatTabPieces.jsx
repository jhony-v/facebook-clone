import React, { useCallback } from "react";
import ViewerListRowItems from "./ChatTabViewer/ViewerListRowItems";
import ViewerSearchInput from "./ChatTabViewer/ViewerSearchInput";
import { actionSearch } from "./Context/ChatTabReducer";
import { useChatTabContext } from "./Context/ChatTabContext";
import ViewerTabOptions from "./ChatTabViewer/ViewerTabOptions";
import ErrorComponent from "../Common/ErrorComponent";

/**
 * Input to search in the list
 */
export const SearchInput = () => {
  const { state , action, onSearch } = useChatTabContext();
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
  const { state, onOptionSelected } = useChatTabContext();
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
  const { state } = useChatTabContext();
  return <ErrorComponent>
    <ViewerListRowItems data={state.data} render={(e, i) => children(e,i)} />
  </ErrorComponent>
};
