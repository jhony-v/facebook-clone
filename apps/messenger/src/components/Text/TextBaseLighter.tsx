import { Text } from "@chakra-ui/react"
import { FC, ComponentProps } from "react"

type TextBaseLighterProps = ComponentProps<typeof Text> & {
  bold?: boolean
}
const TextBaseLighter: FC<TextBaseLighterProps> = ({ bold, children, ...restProps }) => {
  return (
    <Text {...restProps} fontWeight={bold && "medium"} fontSize="xs">
      {children}
    </Text>
  )
}

export default TextBaseLighter
