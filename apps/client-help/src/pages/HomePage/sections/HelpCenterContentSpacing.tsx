import { FC } from "react"
import WrapperCenterContent from "../../../components/WrapperCenterContent";
import { styled } from '../../../lib/stitches.config'

const Spacing = styled("div", {
    my : "90px"
})

const HelpCenterContentSpacing : FC = ({children}) => (
    <Spacing>
        <WrapperCenterContent>
            {children}
        </WrapperCenterContent>
    </Spacing>
)

export default HelpCenterContentSpacing
