import styled from "styled-components"


function getShadow(shadow : CardStyleProps["shadow"]) {
    return {
        sm : "0px 1px 2px var(--fb-shadow-10)",
        md : "0px 3px 6px var(--fb-shadow-20)",
        lg : "0px 0px 1px var(--fb-gray-20), 0px 10px 14px var(--fb-shadow-30)"
    }[shadow] || undefined;
}

export type CardStyleProps = {
    shadow : "sm" | "md" | "lg",
    rounded ?: number
}

export const CardStyle = styled.div<CardStyleProps>`
    box-sizing:border-box;
    background-color: var(--fb-card-background);
    border-radius: ${props => (typeof props.rounded === "number") ? `${props.rounded}px` : 'var(--fb-corner-radius-04)'};
    box-shadow:${props => getShadow(props.shadow)};
`