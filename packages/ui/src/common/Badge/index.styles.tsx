import styled, { css } from "styled-components";


export interface BaseBadgeStyleProps {
    live?: boolean,
    watching ?: boolean,
    notification ?: boolean
}

export const BaseBadge = styled.div<BaseBadgeStyleProps>`
    font-family: Arial, Helvetica, sans-serif;
    font-size:.9rem;
    padding:2px 3px;
    display: inline-flex;   
    align-items: center;
    justify-items: center;
    color:var(--fb-white);
    border-radius:var(--fb-corner-radius-04);

    ${props => props.live && css`
        background-color:var(--fb-badge-live);
    `}

    ${props => props.watching && css`
        background-color:var(--fb-badge-watching);
    `}

    ${props => props.notification && css`
        background-color:var(--fb-red);
        border-radius:var(--fb-corner-radius-08);
    `}
`   