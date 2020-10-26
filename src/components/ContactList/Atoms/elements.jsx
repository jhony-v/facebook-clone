import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";

export const StyledListContainer = styled(FlexWrapper).attrs({
    fDirection : "column"
})`
    width: ${props => props.w || defaultTheme.width.rightContactsRailsUnit};
    height:${props => props.h || "100%"};
`