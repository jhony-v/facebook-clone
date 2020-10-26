import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { StyledFacebookAvatar } from './elements'

const FacebookAvatar = (props) => {
    return (
        <StyledFacebookAvatar {...props}>
            <FaFacebookF size={32}/>
        </StyledFacebookAvatar>
    )
}

export default FacebookAvatar
