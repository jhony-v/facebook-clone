import React, { useCallback } from "react";
import ListRenderItems from "../Common/ListRenderItems";
import SearchInput from "./ChatTabMolecules/SearchInput";
import { actionSearch } from "./Context/ChatTabReducer";
import { useChatTabContext } from "./Context/ChatTabContext";
import TabOptions from "./ChatTabMolecules/TabOptions";
import ErrorComponent from "../Common/ErrorComponent";

/**
 * Input to search in the list
 */
export const RenderSearchInput = () => {
  const { state , action, onSearch } = useChatTabContext();
  return <SearchInput onKeyUp={(e) => {
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
    <TabOptions initialId={state.filterOptionsInitial} onSelectedOption={onSelectedOption}>
      {children(state.filterOptions)}
    </TabOptions>
  );
};

/**
 * Render list items
 */
export const RenderList = ({ children }) => {
  const { state } = useChatTabContext();

  return <ErrorComponent>
    <ListRenderItems  data={state.data} renderHeight={70} render={(item,options)=>(
      children(item,options)
    )} />
  </ErrorComponent>
};