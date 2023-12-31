import { Box, Flex, Text } from "@chakra-ui/react"
import { FC } from "react"
import { ChatMessage } from "../../types/models"
import Avatar from "../Avatar"
import { TextBaseHighlighted } from "../Text"

type ChatMessageListItemProps = {
  value?: ChatMessage
}

const ChatMessageListItem: FC<ChatMessageListItemProps> = (props) => {
  const { value } = props
  const { profile, message } = value
  return (
    <Flex alignItems={"center"} columnGap={1} px={1} py={4} borderRadius={20}>
      <Box>
        <Avatar src={profile.avatar} size={"sm"} online={profile?.online} />
      </Box>
      <Flex flexDirection={"column"} rowGap={0}>
        <TextBaseHighlighted color="gray.700">{profile.fullName}</TextBaseHighlighted>
        <Text color="gray.500" fontSize="xs">
          {message}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ChatMessageListItem
