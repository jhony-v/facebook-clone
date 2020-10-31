import TextLabel from '@fb-components/TextLabel'
import Wrapper from '@fb-components/Wrapper'
import React from 'react'

export const HeaderTitle = () => (<>
    <TextLabel textSize={800} textColor="vgTextBlack" weight block>Sign Up</TextLabel>
    <Wrapper m="5px 0 0">
        <TextLabel block textSize={300}>It’s quick and easy.</TextLabel>
    </Wrapper>
</>)