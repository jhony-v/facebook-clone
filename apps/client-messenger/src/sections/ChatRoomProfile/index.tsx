import { Accordion, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { BsFillBellFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { GrSearch } from "react-icons/gr"
import Avatar from '../../components/Avatar'
import ListAccordionItem from '../../components/ListAccordionItem'
import { useAppStateStore } from '../../store'

const ChatRoomProfile = () => {
  const { profile } = useAppStateStore(state => state.room)
  const showConversationInformation = useAppStateStore(state => state.room.showConversationInformation)
  
  if(!showConversationInformation) return null;

  return (
    <Flex 
      flexDirection={"column"}
      w="xs" 
      p={2}
    >
      <Flex flexDirection={"column"} alignItems="center" mx={"auto"}>
        <Avatar 
          size="xl"
          src={profile?.avatar} 
          title={profile?.fullName} 
        />
        <Text fontSize={"xs"} textColor="gray.500">{profile?.lastConnected}</Text>
      </Flex>
      <Flex gap={4} mx="auto" my={4}>
        <Avatar size="sm" icon={<FaUserCircle />} bg="gray.100" color="black" title="Profile" titleFontSize="sm" />
        <Avatar size="sm" icon={<BsFillBellFill />} bg="gray.100" color="black" title="Mute" titleFontSize="sm" />
        <Avatar size="sm" icon={<GrSearch />} bg="gray.100" color="black" title="Search" titleFontSize="sm" />
      </Flex>
      <Accordion allowToggle>
        <ListAccordionItem title="Customize chat" showIcon />
        <ListAccordionItem title="Media, files and links" showIcon />
        <ListAccordionItem title="Privacity & support" showIcon />
      </Accordion>
    </Flex>
  )
}

export default ChatRoomProfile