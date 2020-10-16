import React, { useCallback } from "react";
import ViewerListRowItems from "./TabChatViewer/ViewerListRowItems";
import ViewerSearchInput from "./TabChatViewer/ViewerSearchInput";
import { actionFilter, actionSearch } from "./Context/TabChatReducer";
import { useTabChatContext } from "./Context/TabChatContext";
import ViewerTabOptions from "./TabChatViewer/ViewerTabOptions";
import ErrorComponent from "../Common/ErrorComponent";

/**
 * Input to search in the list
 */
export const SearchInput = () => {
  const { action } = useTabChatContext();
  return <ViewerSearchInput onKeyUp={(e) => action(actionSearch(e.target.value))} />
  
};

/**
 * Options to filter by id
 */
export const RenderOptions = ({ children }) => {
  const { state, action } = useTabChatContext();
  const onSelectedOption = useCallback((e) => action(actionFilter(e)), [
    action,
  ]);

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
    <ViewerListRowItems data={state.data} render={(e, i) => children(e, i)} />
  </ErrorComponent>
};
