import React from 'react'
import RoundButton from '../../Common/RoundButton'
import Wrapper from '../../Common/Wrapper'

const ControlButtonOption = ({icon:IconComponent,...restProps}) => {
    return (
        <Wrapper m="0 5px">
            <RoundButton {...restProps} dimension="40px"><IconComponent size={20} /></RoundButton>
        </Wrapper>
    )
}

export default ControlButtonOption
