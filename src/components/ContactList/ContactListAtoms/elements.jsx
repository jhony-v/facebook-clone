import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";

export const StyledListContainer = styled(FlexWrapper).attrs({
    fDirection : "column"
})`
    width: 320px;
    height:100%;
    right:0;
    position:fixed;
    background-color:${defaultTheme.colors.primaryLayoutLight};
`