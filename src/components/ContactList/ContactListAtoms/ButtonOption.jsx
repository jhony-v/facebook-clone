import React from 'react'
import CircleButton from '../../Common/CircleButton'
import Wrapper from '../../Common/Wrapper'

const ButtonOption = ({icon: IconComponent,onClick}) => (
    <Wrapper  m="0 0 0 5px">
        <CircleButton dimension="40px" onClick={onClick}><IconComponent size={15} /></CircleButton>
    </Wrapper>
)
export default ButtonOption
