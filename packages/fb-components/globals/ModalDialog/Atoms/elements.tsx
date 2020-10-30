import Card from "@fb-components/Card";
import FullScreenWrapper from "@fb-components/FullScreenWrapper";
import Wrapper from "@fb-components/Wrapper";
import styled, { css } from "styled-components";

export const StyledBackdropScreenWrapper = styled(FullScreenWrapper)`
    background-color:rgba(255, 255, 255, 0.8);
    display:flex;
    overflow-y:auto;
    ${Card} {
        position:relative;
    }
`

type StyledHeaderWrapperProps = {
    border ?: boolean;
}
export const StyledHeaderWrapper = styled(Wrapper)<StyledHeaderWrapperProps>`
    ${props => props.border && css`
        border-bottom:1px solid ${props.theme.colors.vgBlackAlpha20};
    `}
`