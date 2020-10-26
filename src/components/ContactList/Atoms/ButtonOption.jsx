import React from 'react'
import RoundButton from '../../Common/RoundButton'
import Wrapper from '../../Common/Wrapper'

const ButtonOption = ({icon: IconComponent,onClick}) => (
    <Wrapper  m="0 0 0 5px">
        <RoundButton dimension="40px" onClick={onClick}><IconComponent size={15} /></RoundButton>
    </Wrapper>
)
export default ButtonOption
