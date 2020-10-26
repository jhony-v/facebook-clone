import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";

export const StyledRootSearchEngine = styled(FlexWrapper)`
    position:fixed;
    top:0;
    left:0;
    z-index:1;
    height:${defaultTheme.height.header};
    align-items:center;
    padding-left:16px;
`