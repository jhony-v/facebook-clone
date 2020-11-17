import AccountControlSettings from '@fb-components/globals/AccountControlSettings'
import ContainerListUserStories from '@fb-containers/ContainerListUserStories'
import FacebookCloseWithAvatar from '@fb-components/application/FacebookCloseWithAvatar'
import Wrapper from '@fb-components/common/Wrapper'
import GridPanel from './GridPanel'

const StoriesView = () => {
    return (
        <Wrapper>
            <FacebookCloseWithAvatar onClose={()=>null} />
            <AccountControlSettings/>
            <GridPanel  
            sidebar={<ContainerListUserStories/>}
            main={null}
            />
        </Wrapper>
    )
}

export default StoriesView
