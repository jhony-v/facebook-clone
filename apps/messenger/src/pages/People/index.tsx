import { Box, Text } from '@chakra-ui/react'
import StackFullDetail from '../../components/StackFullDetail'
import withProfileId from '../../utils/hoc/withProfileId'

const People = () => {
  return (
    <StackFullDetail title="People" headerContent={
      <Box px={4}>
        <Text fontSize={"xs"} textColor="gray.400">Active contacts (20)</Text>
      </Box>
    } />
  )
}

export default withProfileId(People)