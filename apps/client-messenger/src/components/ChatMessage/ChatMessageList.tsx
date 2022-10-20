import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { ChatMessage } from '../../types/models'
import ChatMessageListItem from './ChatMessageListItem'

type ChatMessageListProps = {
  chats?: ChatMessage[]  
}

const ChatMessageList : FC<ChatMessageListProps> = ({ chats }) => {
  return (
    <Box>
        {chats.map((chatItem) => <ChatMessageListItem key={chatItem.id} value={chatItem} />)}
    </Box>
  )
}

export default ChatMessageList