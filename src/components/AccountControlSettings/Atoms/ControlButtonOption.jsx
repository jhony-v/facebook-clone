import React from 'react'
import CircleButton from '../../Common/CircleButton'
import Wrapper from '../../Common/Wrapper'

const ControlButtonOption = ({icon:IconComponent,...restProps}) => {
    return (
        <Wrapper m="0 5px">
            <CircleButton {...restProps} dimension="40px"><IconComponent size={20} /></CircleButton>
        </Wrapper>
    )
}

export default ControlButtonOption
