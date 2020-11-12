import AccountControlSettings from '@fb-components/AccountControlSettings'
import ContainerListUserStories from '@fb-components/ContainerListUserStories'
import FacebookCloseWithAvatar from '@fb-components/FacebookCloseWithAvatar'
import Wrapper from '@fb-components/Wrapper'
import React from 'react'
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
