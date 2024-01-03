import { Flex, Icon, Input } from '@chakra-ui/react'
import { FC, useState } from "react"
import { FiArrowLeft, FiSearch } from 'react-icons/fi'

type InputEngineProps = {
    placeholder?: string
}

const InputEngine: FC<InputEngineProps> = ({placeholder}) => {
  const [ searching, setSearching ] = useState(false)  
  
  const toggle = () => {
    setSearching(value => !value)
  }

  return (
    <Flex
        flex={1}
        borderRadius={40}
        background="gray.100"
        alignItems={"center"}
        py={1}
        px={2}
        columnGap={2}
      >
        <Icon
          onClick={toggle}  
          as={searching ? FiArrowLeft : FiSearch}
          size={16}
          color="gray.400"
        />
        <Input placeholder={placeholder} variant={"unstyled"} />
      </Flex>
  )
}

export default InputEngine