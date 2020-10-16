export const TYPES = {
  TAB_SEARCH: "TAB_SEARCH",
  TAB_FILTER: "TAB_FILTER",
};

export const actionFilter = (id) => ({
  type: TYPES.TAB_FILTER,
  payload: { id },
});

export const actionSearch = (value) => ({
  type : TYPES.TAB_SEARCH,
  payload : { value }
})

const TabChatReducer = (state, action) => {
  switch (action.type) {
    case TYPES.TAB_SEARCH:
      let { value  } = action.payload;
      let searching = value.trim().length > 0;
      console.log(state.filterOptionsSearch)
      return {
        ...state,
        searching: searching,
        // data: state.data.filter((e) => e.text.includes(textValue)),
      };
    case TYPES.TAB_FILTER:
      let filterValue = action.payload.id;
      console.log(filterValue);
      return {
        ...state,
        data: state.data.filter((e) => e.category === filterValue),
      };

    default:
      return state;
  }
};

export default TabChatReducer;
