import React, { useState} from "react";
import FloatingButton from "./FloatingButton";
import TabChatMainExpanded from "./TabChatMainExpanded";
import TabHeader from "./TabHeader";

const TabChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <TabChatMainExpanded>
          <TabHeader onClose={() => setOpen(false)} />
        </TabChatMainExpanded>
      )}
      <FloatingButton onClick={() => setOpen(true)} />
    </>
  );
};

export default TabChat;
