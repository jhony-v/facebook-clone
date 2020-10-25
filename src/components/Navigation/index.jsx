import React from 'react'
import { FiHome, FiPlay, FiShoppingCart } from 'react-icons/fi'
import { BsPeopleFill } from "react-icons/bs"
import { StyledListItemsNavigation } from './Atoms/elements'
import LinkButton from './Atoms/LinkButton'

const Navigation = () => {
    return (
        <StyledListItemsNavigation>
            <LinkButton icon={FiHome} isSelected />
            <LinkButton icon={FiPlay} />
            <LinkButton icon={FiShoppingCart} notifications={4} />
            <LinkButton icon={BsPeopleFill} notifications={25} />
        </StyledListItemsNavigation>
    )
}

export default Navigation
