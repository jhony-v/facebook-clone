import { Flex, Box } from "@chakra-ui/react";
import { useAppStateStore } from "../../../../store";
import { RoomMessage } from "../../../../store/room/state";
import ChatRoomMessageActivity from "../../components/ChatRoomMessageActivity";
import ChatRoomMessageItem from "../../components/ChatRoomMessageItem";

const ChatRoomMessages = () => {
  const { messages } = useAppStateStore((state) => state.room);
  return (
    <Flex
      flex={1}
      overflowX="hidden"
      flexDirection={"column"}
      overflowY={"scroll"}
    >
      {messages.map((message) => {
        return (
          <Box display={"inline-flex"} key={message.id}>
            {renderDrivenComponent(message)}
          </Box>
        );
      })}
    </Flex>
  );
};

const DrivenComponent = {
  activity: (message: RoomMessage) => <ChatRoomMessageActivity />,
  message: (message: RoomMessage) => <ChatRoomMessageItem message={message} />,
};

const renderDrivenComponent = <T,>(message: RoomMessage, props?: T) => {
  const Component = DrivenComponent[message.type];
  return <Component value={message} {...props} />;
};

export default ChatRoomMessages;
