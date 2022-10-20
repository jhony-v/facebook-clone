import { Box, Flex, HStack, Icon, Input } from "@chakra-ui/react";
import { AiFillPicture } from "react-icons/ai";
import { BsFillEmojiSmileFill, BsFillGiftFill } from "react-icons/bs";
import { IoMdAddCircle, IoMdDocument } from "react-icons/io";
import BaseIcon from "../../../../components/BaseIcon";

const ChatRoomTypeMessage = () => {
  return (
    <Flex p={2} alignItems="center">
      <HStack spacing={4}>
        <BaseIcon
          icon={IoMdAddCircle}
          size={20}
          tooltip={{ label: "Open more options", placement: "top" }}
        />
        <BaseIcon
          icon={AiFillPicture}
          size={20}
          tooltip={{ label: "Attach a file", placement: "top" }}
        />
        <BaseIcon
          icon={IoMdDocument}
          size={20}
          tooltip={{ label: "Choose a sticker", placement: "top" }}
        />
        <BaseIcon
          icon={BsFillGiftFill}
          size={17}
          tooltip={{ label: "Choose a GIF", placement: "top" }}
        />
      </HStack>
      <Flex
        flex={1}
        mx={2}
        borderRadius={40}
        background="gray.100"
        alignItems={"center"}
        p={2}
        columnGap={2}
      >
        <Input placeholder="Aa" variant={"unstyled"} />
        <BaseIcon
          icon={BsFillEmojiSmileFill}
          size={16}
          color="gray.400"
          tooltip={{ label: "Choose an emoji", placement: "top" }}
        />
      </Flex>
      <Box flex={0}>
        <BsFillEmojiSmileFill size={18} />
      </Box>
    </Flex>
  );
};

export default ChatRoomTypeMessage;
