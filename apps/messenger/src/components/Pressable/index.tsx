import { Box, Flex } from "@chakra-ui/react"
import { FC, PropsWithChildren, ComponentProps } from "react"
import Avatar from "../Avatar"

type PressableProps = ComponentProps<typeof Flex> & {
  leftIcon?: React.ReactElement
}

const Pressable: FC<PropsWithChildren<PressableProps>> = (props) => {
  const { leftIcon, children, ...restProps } = props
  return (
    <Flex
      {...restProps}
      alignItems={"center"}
      borderRadius="md"
      px={1}
      py={2}
      _hover={{ background: "gray.100" }}
    >
      {leftIcon && (
        <Box mr={2}>
          <Avatar size="sm" bg="gray.100" icon={leftIcon} fontSize="xl" color="black" />
        </Box>
      )}
      {children}
    </Flex>
  )
}

export default Pressable
