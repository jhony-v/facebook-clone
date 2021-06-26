import { FC } from "react"
import { styled } from "../lib/stitches.config"
import { AppContentLayout } from "../ui/layouts/AppContent"

const Wrapper =  styled(AppContentLayout, {
    width : "$content-width",
    marginLeft : "auto"
})

const WrapperContent : FC = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default WrapperContent
