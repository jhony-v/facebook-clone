import { FC } from 'react'
import { styled } from '../lib/stitches.config'
import BaseText from './BaseText'

const ParagraphText = styled(BaseText, {
    my : "14px",
    fontSize : "17px"
})


const Paragraph : FC = ({children}) => {
    return <ParagraphText as="p">{children}</ParagraphText>
}

export default Paragraph
