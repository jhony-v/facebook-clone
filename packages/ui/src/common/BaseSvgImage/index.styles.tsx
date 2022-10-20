import styled from "styled-components"


type Size = "auto" | number;

function createSize(size: Size) {
    return size === "auto" ? "auto" : `${size}px`;
}


export interface ImageStyleProps {
    size ?: Size;
    width ?: Size;
    height ?: Size;
    rounded ?: boolean;
}

export const SvgStyle = styled.div<ImageStyleProps>`
    background-color: var(--fb-gray-25);
    width: ${props => props.width || createSize(props.size)};
    height: ${props => props.height || createSize(props.size)};
    border-radius:${props => props.rounded && '100%'};
`;
