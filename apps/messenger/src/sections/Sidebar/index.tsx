import { Box, Flex, List } from "@chakra-ui/react"
import { AiFillMessage } from "react-icons/ai"
import { FaStore } from "react-icons/fa"
import { MdPeople } from "react-icons/md"
import { ImBlocked } from "react-icons/im"
import { BsArchiveFill } from "react-icons/bs"
import SidebarItem from "./components/SidebarItem"
import { useActionsStore, useAppStateStore } from "../../store"
import UserInformation from "./components/UserInformation"
import ToggleSidebar from "./components/ToggleSidebar"
import ProfileMenuActionable from "../ProfileMenuActionable"

const items = [
  { to: "/t", text: "Chats", icon: AiFillMessage },
  { to: "/active/t", text: "People", icon: MdPeople },
  { to: "/marketplace/t", text: "Marketplace", icon: FaStore },
  { to: "/requests/t", text: "Requests", icon: ImBlocked },
  { to: "/archived/t", text: "Archived", icon: BsArchiveFill },
]

const Sidebar = () => {
  const { profile, sidebarOpened } = useAppStateStore()
  const { toggleSidebar } = useActionsStore()
  return (
    <Flex p={2} flexDirection={"column"} borderRightWidth={1} borderRightColor="gray.200">
      <List spacing={2}>
        {items.map((item) => (
          <SidebarItem
            key={item.to}
            to={item.to}
            text={item.text}
            icon={item.icon}
            minimized={!sidebarOpened}
          />
        ))}
      </List>
      <Box mt={"auto"}>
        <Flex
          gap={4}
          alignItems="center"
          justifyContent={"space-between"}
          flexDirection={sidebarOpened ? "row" : "column"}
        >
          <ProfileMenuActionable>
            <UserInformation
              avatar={profile.me.avatar}
              name={profile.firstName}
              showName={sidebarOpened}
            />
          </ProfileMenuActionable>
          <ToggleSidebar onClick={toggleSidebar} />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Sidebar
