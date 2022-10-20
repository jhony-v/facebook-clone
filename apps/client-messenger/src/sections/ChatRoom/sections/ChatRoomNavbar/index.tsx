import { Flex, Text } from "@chakra-ui/react"
import { IoMdMore } from "react-icons/io"
import { BsFillCameraVideoFill, BsTelephoneFill } from "react-icons/bs"
import Avatar from "../../../../components/Avatar"
import { useActionsStore, useAppStateStore } from "../../../../store"
import BaseIcon from "../../../../components/BaseIcon"
import { TextBaseHighlighted } from "../../../../components/Text"

const ChatRoomNavbar = () => {
  const { profile } = useAppStateStore((state) => state.room)
  const { toggleConversationInformation } = useActionsStore().room
  return (
    <Flex
      alignItems={"center"}
      p={2}
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      boxShadow={"sm"}
    >
      <Flex alignItems={"center"} columnGap={2}>
        <Avatar size="sm" src={profile?.avatar} online={profile?.online} />
        <Flex flexDirection={"column"}>
          <TextBaseHighlighted>{profile?.fullName}</TextBaseHighlighted>
          <Text fontSize={"xs"} textColor="gray.500">
            {profile?.lastConnected}
          </Text>
        </Flex>
      </Flex>
      <Flex ml="auto" columnGap={6} alignItems="center" position={"relative"}>
        <BaseIcon tooltip={{ label: "Start a voice call" }} icon={BsTelephoneFill} />
        <BaseIcon tooltip={{ label: "Start a video call" }} icon={BsFillCameraVideoFill} />
        <BaseIcon
          tooltip={{ label: "Conversation information" }}
          icon={IoMdMore}
          onClick={toggleConversationInformation}
        />
      </Flex>
    </Flex>
  )
}

export default ChatRoomNavbar
