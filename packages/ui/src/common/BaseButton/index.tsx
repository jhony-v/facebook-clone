import { ButtonHTMLAttributes, FC } from 'react'
import { BaseButtonStyle, BaseButtonStyleProps } from "./index.style"

type BaseButtonProps = BaseButtonStyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton : FC<BaseButtonProps> = ({children,variant,size,...restProps}) => {
    return (
        <BaseButtonStyle variant={variant} size={size} {...restProps}>
            {children}
        </BaseButtonStyle>
    )
}

BaseButton.defaultProps = {
    variant: "primary",
    size: "md"
}

export default BaseButton
