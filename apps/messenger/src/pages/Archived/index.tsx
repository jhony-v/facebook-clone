import NotMessageFound from '../../components/NotMessageFound'
import StackFullDetail from '../../components/StackFullDetail'
import withProfileId from '../../utils/hoc/withProfileId'

const Archived = () => {
  return (
    <StackFullDetail title="Archived Chats" fullContent={<NotMessageFound/>} />
  )
}

export default withProfileId(Archived)