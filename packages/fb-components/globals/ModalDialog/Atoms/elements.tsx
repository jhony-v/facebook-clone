import Card from "@fb-components/Card";
import FullScreenWrapper from "@fb-components/FullScreenWrapper";
import styled from "styled-components";

export const StyledBackdropScreenWrapper = styled(FullScreenWrapper)`
    background-color:rgba(255,255,255,.8);
    display:flex;
    overflow-y:auto;
    ${Card} {
        position:relative;
    }
`