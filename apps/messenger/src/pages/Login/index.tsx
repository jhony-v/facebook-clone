import { Text, VStack } from "@chakra-ui/react"
import MessengerLogo from "../../components/MessengerLogo"
import LoginForm from "../../sections/LoginForm"

const Login = () => {
  return (
    <VStack pt={40} pb={5}>
      <MessengerLogo />
      <Text fontSize={"4xl"}>Connect with your favorite people.</Text>
      <LoginForm />
    </VStack>
  )
}

export default Login
