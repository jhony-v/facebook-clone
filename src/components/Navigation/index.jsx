import React from 'react'
import { FiArchive, FiHome, FiPlayCircle, FiShoppingCart } from 'react-icons/fi'
import { BsPeopleFill } from "react-icons/bs"
import { StyledListItemsNavigation } from './Atoms/elements'
import LinkButton from './Atoms/LinkButton'

const Navigation = () => {
    return (
        <StyledListItemsNavigation>
            <LinkButton icon={FiHome} isSelected />
            <LinkButton icon={FiPlayCircle} />
            <LinkButton icon={FiArchive} />
            <LinkButton icon={FiShoppingCart} notifications={4} />
            <LinkButton icon={BsPeopleFill} notifications={25} />
        </StyledListItemsNavigation>
    )
}

export default Navigation
