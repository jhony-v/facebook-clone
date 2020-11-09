import React from 'react'
import { DropdownTabOptionsAnimatableProvider } from './Context/DropdownTabOptionsAnimatableContext'
import DropdownItemAnimatable from './Molecules/DropdownItemAnimatable'
import { ContainerAnimatable } from './Atoms/elements'

type DropdownTabOptionsAnimatableProps = {
    children : React.ReactNode;
    initialId : string;
    w ?: string;
}
const DropdownTabOptionsAnimatable = (props : DropdownTabOptionsAnimatableProps) => {
    return (
    <DropdownTabOptionsAnimatableProvider initialId={props.initialId}>
        <ContainerAnimatable w={props.w}>
        {props.children}
        </ContainerAnimatable>
    </DropdownTabOptionsAnimatableProvider>
    )
}

DropdownTabOptionsAnimatable.Item = DropdownItemAnimatable;

export default DropdownTabOptionsAnimatable
