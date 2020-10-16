import React, { useState } from "react";
import { ChatTabProvider } from "./Context/ChatTabContext";
import { StyledTabChatFillWrapper } from "./ChatTabComponents/elements";
import FloatingButton from "./ChatTabComponents/FloatingButton";
import TabMainExpanded from "./ChatTabComponents/TabMainExpanded";
import TabHeader from "./ChatTabComponents/TabHeader";
import ViewerTabOptions from "./ChatTabViewer/ViewerTabOptions";
import RowItem from "./ChatTabViewer/RowItem";
import { RenderList, RenderOptions, SearchInput } from "./ChatTabPieces";
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
                <SearchInput />
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

ChatTab.RenderOptions = RenderOptions;
ChatTab.Option = ViewerTabOptions.Option;
ChatTab.RenderList = RenderList;
ChatTab.Item = RowItem;

export default ChatTab;
