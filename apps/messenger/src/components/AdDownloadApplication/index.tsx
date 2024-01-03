import { Flex } from "@chakra-ui/react"
import { GoDesktopDownload } from "react-icons/go"
import { TextBaseHighlighted } from "../Text"

const AdDownloadApplication = () => {
  return (
    <Flex
      borderTopWidth={1}
      borderTopColor="gray.200"
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
      gap={2}
    >
      <GoDesktopDownload />
      <TextBaseHighlighted>Install Messenger app</TextBaseHighlighted>
    </Flex>
  )
}

export default AdDownloadApplication
