import { Box } from "@chakra-ui/react"
import { FC, memo } from "react"
import { RiDoorOpenFill } from "react-icons/ri"

const ToggleSidebar: FC<{ onClick?: () => void }> = memo(({ onClick }) => {
  return (
    <Box>
      <div onClick={onClick}>
        <RiDoorOpenFill size={20} />
      </div>
    </Box>
  )
})

export default ToggleSidebar
