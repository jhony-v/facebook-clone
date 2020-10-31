import React from 'react'
import RoundButton from '@fb-components/RoundButton'
import Wrapper from '@fb-components/Wrapper'

type ButtonOptionProps = {
    icon : React.JSXElementConstructor<{size:number}>,
    onClick : (e : React.MouseEvent<HTMLButtonElement>) => void
}
const ButtonOption = ({icon: IconComponent,onClick}:ButtonOptionProps) => (
    <Wrapper  m="0 0 0 5px">
        <RoundButton dimension="40px" onClick={onClick}><IconComponent size={15} /></RoundButton>
    </Wrapper>
)


ButtonOption.defaultProps = {
    onClick : () => null
}

export default ButtonOption
