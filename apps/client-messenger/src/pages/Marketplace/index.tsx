import NotMessageFound from '../../components/NotMessageFound'
import StackFullDetail from '../../components/StackFullDetail'
import withProfileId from '../../utils/hoc/withProfileId'

const Marketplace = () => {
  return (
    <StackFullDetail title="Marketplace Chats" 
      fullContent={<NotMessageFound/>} 
    />
  )
}

export default withProfileId(Marketplace)