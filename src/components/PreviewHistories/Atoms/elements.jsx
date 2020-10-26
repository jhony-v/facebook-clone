import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import Avatar from "../../Common/Avatar";
import RoundButton from "../../Common/RoundButton";

export const StyledPreviewHistoriesWrapper = styled.div`
    display:flex;
    > * {
        margin-right:10px;
    }
`


export const StyledCardOverflow = styled.div`
    overflow:hidden;
    height:200px;
    width:120px;
    border-radius:10px;
    display:flex;
    align-items:stretch;
    flex-direction:column;
    background-color:${defaultTheme.colors.primaryLayout};
    box-shadow:0 2px 3px rgba(0,0,0,.1);
    position:relative;
    `

export const StyledCardBackgroundImage = styled.div`
    background:linear-gradient(25deg, rgba(0,0,0,.6) 20%, transparent 100%), url(${props => props.image}) no-repeat center / cover;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    `

export const StyledUserButtonAdd = styled(RoundButton).attrs({
    colorIcon : "primaryLayout",
    dimension : "36px",
})`
    background-color:${defaultTheme.colors.primary};
    position:absolute;
    bottom:calc(50% - 36px);
`

export const StyledUserImageAdd = styled.img`
    height:60%;
    width:100%;
    object-fit:cover;
`