import { useState } from "react"
import { Box, Button, Flex, Input, Link } from "@chakra-ui/react"
import useLogin from "./hooks/useLogin"

const LoginForm = () => {
  const [continueAsDefault, setContinueAsDefault] = useState(true)
  const { handleContinue, handleContinueAsDefault, onChangeForm } = useLogin()

  return (
    <Flex flexDirection={"column"} py={10} gap={5}>
      {continueAsDefault && (
        <Button bg="blue" borderRadius={30} onClick={handleContinueAsDefault}>
          Continue as Jhony Vega
        </Button>
      )}
      {!continueAsDefault && (
        <>
          <Input {...onChangeForm("username")} placeholder="Email or phone number" />
          <Input {...onChangeForm("password")} placeholder="Password" type="password" />
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Button bg="blue" borderRadius={30} onClick={handleContinue}>
              Continue
            </Button>
          </Box>
        </>
      )}
      <Link mx="auto" onClick={() => setContinueAsDefault(false)}>
        Switch account
      </Link>
    </Flex>
  )
}

export default LoginForm
