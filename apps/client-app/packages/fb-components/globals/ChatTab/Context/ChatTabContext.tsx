import { useContext, useReducer, createContext } from "react";
import TabChatReducer from "./ChatTabReducer";
import { ChatTabMetadata } from "./types";

const ChatTabContext = createContext<ChatTabMetadata.ContextState | null>(null);

export const ChatTabProvider = ({
  children,
  filterOptions,
  selectedFilterOption,
  onSelectedOption,
  onSearch
}: ChatTabMetadata.ChatTabProviderProps) => {
  const initialState: ChatTabMetadata.IStateReducer = {
    searching: false,
    data: [],
    filterOptions,
    selectedFilterOption
  };
  const [state, action] = useReducer<ChatTabMetadata.StateUseReducer>(
    TabChatReducer,
    initialState
  );
  return (
    <ChatTabContext.Provider
      value={{
        state,
        action,
        onSelectedOption,
        onSearch
      }}
    >
      {children}
    </ChatTabContext.Provider>
  );
};

export const useChatTabContext = () =>
  useContext(ChatTabContext) as ChatTabMetadata.ContextState;
export default ChatTabContext;
