import { Text } from "@chakra-ui/react"
import { FC, ComponentProps } from "react"

type TextBaseHighlightedProps = ComponentProps<typeof Text>

const TextBaseHighlighted: FC<TextBaseHighlightedProps> = ({ children, ...restProps }) => {
  return (
    <Text {...restProps} fontWeight={"medium"} fontSize="sm">
      {children}
    </Text>
  )
}

export default TextBaseHighlighted
