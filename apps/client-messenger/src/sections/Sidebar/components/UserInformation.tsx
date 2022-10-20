import { Avatar, Flex } from "@chakra-ui/react"
import { FC, memo } from "react"
import { TextBaseHighlighted } from "../../../components/Text"

type UserInformationProps = {
  avatar: string
  name: string
  showName: boolean
  onClick?(): void
}
const UserInformation: FC<UserInformationProps> = memo(({ avatar, name, showName, onClick }) => {
  return (
    <Flex gap={2} alignItems={"center"} onClick={onClick}>
      <Avatar src={avatar} />
      {showName && <TextBaseHighlighted>{name}</TextBaseHighlighted>}
    </Flex>
  )
})

export default UserInformation
