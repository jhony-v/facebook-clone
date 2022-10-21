import React, { useState } from "react";
import PortalComponent from "@fb-components/common/PortalComponent";
import { ChatTabProvider } from "./Context/ChatTabContext";
import { StyledTabChatFillWrapper } from "./Atoms/elements";
import FloatingButton from "./Atoms/FloatingButton";
import TabMainExpanded from "./Atoms/TabMainExpanded";
import TabHeader from "./Atoms/TabHeader";
import RowItem from "./Molecules/RowItem";
import * as ChatTabPieces from "./ChatTabPieces";
import TabOptions from "../TabOptions";
import { ChatTabMetadata } from "./Context/types";

type ChatTabProps = ChatTabMetadata.ChatTabProviderProps;

const ChatTab = ({ children, ...restProps }: ChatTabProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const onToggleOpen = () => setOpen((prevOpen) => !prevOpen);
  return (
    <>
      {open && (
        <PortalComponent className="chat-tab-portal">
          <TabMainExpanded>
            <TabHeader onClose={onToggleOpen} titleHeader="New Message" />
            <ChatTabProvider {...restProps}>
              <StyledTabChatFillWrapper>
                <ChatTabPieces.RenderSearchInput />
                {children}
              </StyledTabChatFillWrapper>
            </ChatTabProvider>
          </TabMainExpanded>
        </PortalComponent>
      )}
      <FloatingButton onClick={onToggleOpen} />
    </>
  );
};

ChatTab.Options = ChatTabPieces.RenderOptions;
ChatTab.Option = TabOptions.Option;
ChatTab.List = ChatTabPieces.RenderList;
ChatTab.ListItem = RowItem;

export default ChatTab;
