import React, { useCallback, useState } from "react";
import FloatingButton from "./TabChatComponents/FloatingButton";
import TabChatMainExpanded from "./TabChatComponents/TabChatMainExpanded";
import TabHeader from "./TabChatComponents/TabHeader";
import TabChatViewer from "./TabChatViewer";

const TabChat = () => {
  const [open, setOpen] = useState(false);
  const onToggleOpen = useCallback(() => setOpen((prevOpen) => !prevOpen), [
    setOpen,
  ]);

  return (
    <>
      {open && (
        <TabChatMainExpanded>
          <TabHeader onClose={onToggleOpen} titleHeader="New Message" />
          <TabChatViewer />
        </TabChatMainExpanded>
      )}
      <FloatingButton onClick={onToggleOpen} />
    </>
  );
};

export default TabChat;
