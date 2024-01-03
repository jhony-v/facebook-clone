import createAction from "@utils/createAction";
import { ChatTabMetadata } from "./types";

export const TYPES = {
  TAB_SEARCH: "TAB_SEARCH",
  TAB_FILTER: "TAB_FILTER",
  FILL_DATA: "FILL_DATA"
};

function TabChatReducer(
  state: ChatTabMetadata.IStateReducer,
  action
): ChatTabMetadata.IStateReducer {
  switch (action.type) {
    case TYPES.TAB_SEARCH:
      const { value, filterValue } = action.payload;
      const searching = value.trim().length > 0;
      return {
        ...state,
        searching,
        data: filterValue
      };
    case TYPES.TAB_FILTER:
      const { selectedFilterOption, data } = action.payload;
      return {
        ...state,
        selectedFilterOption,
        data
      };
    default:
      return state;
  }
}

export const actionSearch = createAction(TYPES.TAB_SEARCH);
export const actionSelectFilter = createAction(TYPES.TAB_FILTER);
export const actionFillData = createAction(TYPES.FILL_DATA);
export default TabChatReducer;
