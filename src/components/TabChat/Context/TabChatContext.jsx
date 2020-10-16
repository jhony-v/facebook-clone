import React, { useContext, useReducer } from "react";
import TabChatReducer from "./TabChatReducer";

const TabChatContext = React.createContext();

export const TabChatProvider = ({
  children,
  data,
  filterOptions,
  filterOptionsSearch,
  filterOptionsInitial,
  onOptionSelected,
}) => {
  const [state, action] = useReducer(TabChatReducer, {
    searching: false,
    filterOptions,
    filterOptionsInitial,
    filterOptionsSearch,
    data,
  });

  return (
    <TabChatContext.Provider value={{ state, action, onOptionSelected }}>
      {children}
    </TabChatContext.Provider>
  );
};

export const TabChatConsumer = TabChatContext.Consumer;
export const useTabChatContext = () => useContext(TabChatContext);
export default TabChatContext;
