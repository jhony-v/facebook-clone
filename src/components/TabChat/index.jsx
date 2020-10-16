import React, { useState } from "react";
import { TabChatProvider } from "./Context/TabChatContext";
import { StyledTabChatFillWrapper } from "./TabChatComponents/elements";
import FloatingButton from "./TabChatComponents/FloatingButton";
import TabChatMainExpanded from "./TabChatComponents/TabChatMainExpanded";
import TabHeader from "./TabChatComponents/TabHeader";
import ViewerTabOptions from "./TabChatViewer/ViewerTabOptions";
import RowItem from "./TabChatViewer/RowItem";
import { RenderList, RenderOptions, SearchInput } from "./TabChatPieces";

const TabChat = ({children,...restProps}) => {
  const [open, setOpen] = useState(false);
  const onToggleOpen = () => setOpen((prevOpen) => !prevOpen);
  
  return (
    <>
      {open && (
        <TabChatMainExpanded>
          <TabHeader onClose={onToggleOpen} titleHeader="New Message" />
          <TabChatProvider {...restProps}>
            <StyledTabChatFillWrapper>
              <SearchInput/>
              {children}
            </StyledTabChatFillWrapper>
          </TabChatProvider>
        </TabChatMainExpanded>
      )}
      <FloatingButton onClick={onToggleOpen} />
    </>
  );
};

TabChat.RenderOptions = RenderOptions;
TabChat.Option = ViewerTabOptions.Option;
TabChat.RenderList = RenderList;
TabChat.Item = RowItem;

export default TabChat;
