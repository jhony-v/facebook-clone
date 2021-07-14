import { FC } from 'react'
import { CardStyle, CardStyleProps } from "./index.styles"


type BaseCardProps = CardStyleProps;

const BaseCard : FC<BaseCardProps> = ({children,shadow,rounded,...restProps}) => {
    return (
        <CardStyle {...restProps} shadow={shadow} rounded={rounded}>
            {children}
        </CardStyle>
    )
}

BaseCard.defaultProps = {
    shadow : "sm"
}


export default BaseCard
