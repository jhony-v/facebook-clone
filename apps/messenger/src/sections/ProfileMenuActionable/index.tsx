import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { FC, PropsWithChildren } from "react"
import { AiFillInfoCircle, AiFillWarning } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { HiBars3BottomLeft } from "react-icons/hi2"
import { IoIosHelpCircle, IoIosSettings } from "react-icons/io"
import ProfilePreferences from "../ProfilePreferences"
import HelperIcon from "./components/HelperIcon"

const Item: FC<{ icon?: React.ReactElement; title?: string; onClick?(): void }> = ({
  icon,
  title,
  onClick,
}) => {
  return (
    <MenuItem icon={<HelperIcon icon={icon} />} onClick={onClick}>
      <Text fontWeight={"medium"}>{title}</Text>
    </MenuItem>
  )
}

const ProfileMenuActionable: FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props
  const settingsModal = useDisclosure()
  return (
    <>
      <Menu>
        <MenuButton as={"div"}>{children}</MenuButton>
        <MenuList p={3} border="none" boxShadow={"md"}>
          <Item icon={<IoIosSettings />} title="Settings" onClick={settingsModal.onOpen} />
          <MenuDivider borderColor={"gray.200"} />
          <Item icon={<IoIosHelpCircle />} title="Help" />
          <Item icon={<AiFillWarning />} title="Report a problem" />
          <MenuDivider borderColor={"gray.200"} />
          <Item icon={<AiFillInfoCircle />} title="About" />
          <Item icon={<HiBars3BottomLeft />} title="Terms" />
          <Item icon={<HiBars3BottomLeft />} title="Data Policy" />
          <Item icon={<HiBars3BottomLeft />} title="Cookie Policy" />
          <MenuDivider borderColor={"gray.200"} />
          <Item icon={<FaFacebookMessenger />} title="New! Messenger for Windows" />
          <Item icon={<FiLogOut />} title="Log out" />
        </MenuList>
      </Menu>
      <ProfilePreferences isOpen={settingsModal.isOpen} onClose={settingsModal.onClose} />
    </>
  )
}

export default ProfileMenuActionable
