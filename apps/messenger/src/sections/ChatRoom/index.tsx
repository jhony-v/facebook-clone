import { Flex } from '@chakra-ui/react'
import ChatRoomMessages from './sections/ChatRoomMessages'
import ChatRoomNavbar from './sections/ChatRoomNavbar'
import ChatRoomTypeMessage from './sections/ChatRoomTypeMessage'

const ChatRoom = () => {
  return <Flex 
  flex={1} 
  flexDirection="column"
  borderRightWidth={1} 
  borderRightColor="gray.200"
  borderLeftWidth={1} 
  borderLeftColor="gray.200"
  >
    <ChatRoomNavbar/>
    <ChatRoomMessages/>
    <ChatRoomTypeMessage/>
  </Flex>
}

export default ChatRoom