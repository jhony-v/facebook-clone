import { FC } from "react";
import { RoomTheme } from "../../../../store/room/state";
import { ChatMessage } from "../../../../types/models";

type ChatRoomMessageItemProps = {
  message: ChatMessage;
  theme?: RoomTheme;
  showProfileAvatar?: boolean;
};

const ChatRoomMessageItem: FC<ChatRoomMessageItemProps> = ({ message }) => {
  return <div>ChatRoomMessageItem</div>;
};

export default ChatRoomMessageItem;
