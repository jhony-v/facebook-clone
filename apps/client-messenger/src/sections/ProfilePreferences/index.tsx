import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Switch,
} from "@chakra-ui/react"
import { FC } from "react"
import Avatar from "../../components/Avatar"
import Pressable from "../../components/Pressable"
import { TextBaseHighlighted } from "../../components/Text"
import { useAppStateStore } from "../../store"
import { IoChatbubblesSharp } from "react-icons/io5"
import { AiFillMinusCircle, AiTwotoneMessage, AiTwotoneSound } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import TextBaseLighter from "../../components/Text/TextBaseLighter"

type ProfilePreferencesProps = {
  isOpen: boolean
  onClose?(): void
}

const ProfilePreferences: FC<ProfilePreferencesProps> = ({ isOpen, onClose }) => {
  const { me } = useAppStateStore((state) => state.profile)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Flex justifyContent={"center"} mb={4}>
            <TextBaseHighlighted>Preferences</TextBaseHighlighted>
          </Flex>
          <TextBaseHighlighted mb={1}>Account</TextBaseHighlighted>
          <Pressable>
            <Avatar src={me.avatar} size="lg" />
            <Box ml={2}>
              <TextBaseHighlighted>{me.fullName}</TextBaseHighlighted>
              <TextBaseLighter>See your profile</TextBaseLighter>
            </Box>
          </Pressable>
          <Pressable leftIcon={<AiTwotoneMessage />} my={4}>
            <TextBaseHighlighted>Active status ON</TextBaseHighlighted>
          </Pressable>
          <TextBaseHighlighted mb={2}>Notifications</TextBaseHighlighted>
          <Flex flexDirection={"column"} gap={2}>
            <Pressable leftIcon={<AiTwotoneSound />}>
              <Box>
                <TextBaseHighlighted>Notification sounds</TextBaseHighlighted>
                <TextBaseLighter>
                  Use sounds to notify you about incoming messages, calls, video chats, and in-app
                  sounds.
                </TextBaseLighter>
              </Box>
              <Box ml="auto">
                <Switch size="lg" />
              </Box>
            </Pressable>
            <Pressable leftIcon={<AiTwotoneSound />}>
              <Box>
                <TextBaseHighlighted>Do Not Disturb</TextBaseHighlighted>
                <TextBaseLighter>Mute notifications for a specific period of time.</TextBaseLighter>
              </Box>
              <Box ml="auto">
                <Switch size="lg" />
              </Box>
            </Pressable>
            <Pressable leftIcon={<BsCurrencyDollar />}>
              <TextBaseHighlighted>Manage payments</TextBaseHighlighted>
            </Pressable>
            <Pressable leftIcon={<IoChatbubblesSharp />}>
              <TextBaseHighlighted>Manage message delivery</TextBaseHighlighted>
            </Pressable>
            <Pressable leftIcon={<AiFillMinusCircle />}>
              <TextBaseHighlighted>Manage blocking</TextBaseHighlighted>
            </Pressable>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProfilePreferences
