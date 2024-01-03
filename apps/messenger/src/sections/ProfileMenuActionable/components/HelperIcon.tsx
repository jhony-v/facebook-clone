import { FC } from "react"
import Avatar from "../../../components/Avatar"

const HelperIcon: FC<{ icon: React.ReactElement }> = ({ icon }) => {
  return <Avatar size="sm" icon={icon} bg="gray.100" color="black" />
}

export default HelperIcon
