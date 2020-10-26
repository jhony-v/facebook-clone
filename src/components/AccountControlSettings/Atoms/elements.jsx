import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";
import RowItemSelectable from "../../Common/RowItemSelectable";

export const StyledControlWrapper = styled(FlexWrapper)`
    height:${defaultTheme.height.header};
    position:fixed;
    right:0;
    top:0;
    align-items:center;
    padding-right:16px;
`;


export const StyledUserAccountButton = styled(RowItemSelectable)`
    border-radius:20px;
    padding:4px;
    margin-right:20px;
`