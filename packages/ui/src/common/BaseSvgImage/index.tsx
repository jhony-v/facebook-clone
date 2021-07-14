import React, { FC } from 'react'
import { SvgStyle, ImageStyleProps } from "./index.styles"


type BaseSvgImageProps = ImageStyleProps & {
    src?: string
};

const BaseSvgImage : FC<BaseSvgImageProps> = (props) => {
    const {  src, size, width, height, rounded } = props;
    return (
        <SvgStyle as="svg" x="0" y="0" rounded={rounded} width={width} height={height} size={size}>
            <image
            href={src} 
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            />
        </SvgStyle>
    );
}

BaseSvgImage.defaultProps = {
    size : 40,
    rounded: true,
}

export default BaseSvgImage