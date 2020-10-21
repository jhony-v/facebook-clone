import React, { useState } from "react";
import { ChatTabProvider } from "./Context/ChatTabContext";
import { StyledTabChatFillWrapper } from "./ChatTabAtoms/elements";
import FloatingButton from "./ChatTabAtoms/FloatingButton";
import TabMainExpanded from "./ChatTabAtoms/TabMainExpanded";
import TabHeader from "./ChatTabAtoms/TabHeader";
import TabOptions from "./ChatTabMolecules/TabOptions";
import RowItem from "./ChatTabMolecules/RowItem";
import * as ChatTabPieces from "./ChatTabPieces";
import ChatTabPortal from "./ChatTabPortal";

const ChatTab = ({ children, ...restProps }) => {
  const [open, setOpen] = useState(false);
  const onToggleOpen = () => setOpen((prevOpen) => !prevOpen);
  return (
    <>
      {open && (
        <ChatTabPortal>
          <TabMainExpanded>
            <TabHeader onClose={onToggleOpen} titleHeader="New Message" />
            <ChatTabProvider {...restProps}>
              <StyledTabChatFillWrapper>
                <ChatTabPieces.RenderSearchInput />
                {children}
              </StyledTabChatFillWrapper>
            </ChatTabProvider>
          </TabMainExpanded>
        </ChatTabPortal>
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
