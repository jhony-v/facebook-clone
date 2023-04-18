import React, { useCallback } from "react";
import ErrorComponent from "@fb-components/common/ErrorComponent";
import ListRenderItems from "@fb-components/common/ListRenderItems";
import SearchInput from "./Molecules/SearchInput";
import { actionSearch, actionSelectFilter } from "./Context/ChatTabReducer";
import { useChatTabContext } from "./Context/ChatTabContext";
import TabOptions from "../TabOptions";

/**
 * Input to search in the list
 */
export const RenderSearchInput = () => {
  const { state, action, onSearch } = useChatTabContext();
  return (
    <SearchInput
      onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        const filterValue = onSearch(state.data, value);
        action(actionSearch({ value, filterValue }));
      }}
    />
  );
};

/**
 * Options to filter by id
 */

export const RenderOptions = ({ children }) => {
  const { state, onSelectedOption, action } = useChatTabContext();
  const handlerOnSelectedOption = useCallback(
    (selectedFilterOption: string | number) => {
      onSelectedOption({
        optionId: selectedFilterOption,
        fillData: (data) => {
          action(actionSelectFilter({ selectedFilterOption, data }));
        }
      });
    },
    [onSelectedOption, action]
  );

  return !state.searching ? (
    <TabOptions
      initialId={state.selectedFilterOption}
      onSelectedOption={handlerOnSelectedOption}
    >
      {children(state.filterOptions)}
    </TabOptions>
  ) : null;
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
        render={(item, options) => children(item, options)}
      />
    </ErrorComponent>
  );
};
