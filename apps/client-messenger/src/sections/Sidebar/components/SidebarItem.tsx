import { ListIcon, ListItem, Text } from "@chakra-ui/react"
import { FC, JSXElementConstructor, memo } from "react"
import { useNavigate } from "react-router-dom"
import { useAppStateStore } from "../../../store"

type SidebarItemProps = {
  to: string
  text: string
  minimized?: boolean
  icon: JSXElementConstructor<{}>
}
const SidebarItem: FC<SidebarItemProps> = memo(({ to, text, minimized, icon }) => {
  const navigate = useNavigate()
  const existsProfile = useAppStateStore((state) => state.room.existsProfile)
  const roomProfileId = useAppStateStore((state) => state.room.profile?.id)
  const path = existsProfile ? `${to}/${roomProfileId}` : `${to}/1`
  const match = location.pathname.includes(to)

  const handleNavigate = () => {
    navigate(path)
  }

  return (
    <ListItem
      px={3}
      py={1}
      onClick={handleNavigate}
      background={match && "gray.100"}
      borderRadius={10}
    >
      <ListIcon as={icon} color="gray.500" />
      {!minimized && (
        <Text fontSize="sm" pr={16} display="inline-block">
          {text}
        </Text>
      )}
    </ListItem>
  )
})

export default SidebarItem
