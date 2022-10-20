import { Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom"
import MessengerScreenLoading from "../../components/MessengerScreenLoading"
import { useActionsStore, useAppStateStore } from "../../store"
import ChatRoom from "../ChatRoom"
import ChatRoomProfile from "../ChatRoomProfile"
import Sidebar from "../Sidebar"

const Dashboard = () => {
  const {
    profile: { authenticate },
  } = useActionsStore()
  const { loadingAuthentication, authenticated } = useAppStateStore((state) => state.profile)

  useEffect(() => {
    authenticate()
  }, [])

  if (loadingAuthentication) {
    return <MessengerScreenLoading />
  }

  if (!authenticated) {
    return <Navigate replace to="/login" />
  }

  return (
    <Flex h="100vh" overflow={"hidden"} alignItems="stretch">
      <Flex>
        <Sidebar />
      </Flex>
      <Flex alignItems={"stretch"} flex="1">
        <Flex flexShrink={1} w="360px">
          <Outlet />
        </Flex>
        <Flex flex="1">
          <ChatRoom />
        </Flex>
        <Flex>
          <ChatRoomProfile />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Dashboard
