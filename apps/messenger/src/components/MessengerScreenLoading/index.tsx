import { Container, Flex, Progress, Text } from "@chakra-ui/react"
import MessengerLogo from "../MessengerLogo"

const MessengerScreenLoading = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
      position={"fixed"}
      w="full"
      h="full"
    >
      <MessengerLogo />
      <Container my={5}>
        <Progress isIndeterminate size={"xs"} />
      </Container>
      <Text textAlign={"center"}>Messenger</Text>
    </Flex>
  )
}

export default MessengerScreenLoading
