import { Avatar as AvatarUI, AvatarBadge, Box, Text, TypographyProps } from "@chakra-ui/react"
import { FC, ComponentProps, ReactNode } from "react"

type AvatarProps = ComponentProps<typeof AvatarUI> & {
  title?: string | ReactNode
  online?: boolean
  titleFontSize?: TypographyProps["fontSize"]
  onClick?(): void
}

const Avatar: FC<AvatarProps> = ({ title, online, titleFontSize, onClick, ...restProps }) => {
  return (
    <Box display={"inline-flex"} flexDirection="column" alignItems={"center"}>
      <AvatarUI onClick={onClick} {...restProps}>
        {online && <AvatarBadge boxSize="1.2em" bg="green.400" />}
      </AvatarUI>
      {title && (
        <Text mt={2} fontWeight="semibold" fontSize={titleFontSize} textAlign={"center"}>
          {title}
        </Text>
      )}
    </Box>
  )
}

export default Avatar
