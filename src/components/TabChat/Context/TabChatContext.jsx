import React, { useContext, useReducer } from "react";
import TabChatReducer from "./TabChatReducer";

const TabChatContext = React.createContext();

export const TabChatProvider = ({
  children,
  data,
  filterOptions,
  filterOptionsInitial,
  onOptionSelected,
  onSearch
}) => {
  const [state, action] = useReducer(TabChatReducer, {
    searching: false,
    data,
    filterOptions,
    filterOptionsInitial,
  });

  return (
    <TabChatContext.Provider value={{ state, action, onOptionSelected, onSearch }}>
      {children}
    </TabChatContext.Provider>
  );
};

export const TabChatConsumer = TabChatContext.Consumer;
export const useTabChatContext = () => useContext(TabChatContext);
export default TabChatContext;
