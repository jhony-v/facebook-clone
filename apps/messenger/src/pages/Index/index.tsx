import { Box, Flex } from "@chakra-ui/react";
import AdDownloadApplication from "../../components/AdDownloadApplication";
import Avatar from "../../components/Avatar";
import StackFullDetail from "../../components/StackFullDetail";
import withProfileId from "../../utils/hoc/withProfileId";
import { FiEdit } from "react-icons/fi";
import { MdVideoCall } from "react-icons/md";
import InputEngine from "../../components/InputEngine";
import { useAppStateStore } from "../../store";
import ChatMessageList from "../../components/ChatMessage/ChatMessageList";

const Index = () => {
  const chatMessages = useAppStateStore((state) => state.chatMessages);
  return (
    <StackFullDetail
      title="Chats"
      options={
        <Flex columnGap={3}>
          <Avatar size="sm" icon={<MdVideoCall size={20} />} bg="gray.100" color="black" />
          <Avatar size="sm" icon={<FiEdit size={20} />} bg="gray.100" color="black" />
        </Flex>
      }
      headerContent={
        <Box px={4} mb={2}>
          <InputEngine placeholder="Search Messenger" />
        </Box>
      }
      footerContent={<AdDownloadApplication />}
      fullContent={
        <Flex px={2}>
          <ChatMessageList chats={chatMessages} />
        </Flex>
      }
    />
  );
};

export default withProfileId(Index);
