export const TYPES = {
  TAB_SEARCH: "TAB_SEARCH",
};

export const actionSearch = (valueFilter,value) => ({
  type : TYPES.TAB_SEARCH,
  payload : { valueFilter, value }
})

const TabChatReducer = (state, action) => {
  switch (action.type) {
    case TYPES.TAB_SEARCH:
      let { value, valueFilter } = action.payload;
      let searching = value.trim().length > 0;
      return {
        ...state,
        searching: searching,
        data: valueFilter,
      };

    default:
      return state;
  }
};

export default TabChatReducer;
