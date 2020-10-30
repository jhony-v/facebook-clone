// ----------sign in----------

import FullScreenWrapper from "@fb-components/FullScreenWrapper";
import styled from "styled-components";

export const StyledGlobal = {
  Background: styled(FullScreenWrapper)`
    background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
    display:flex;
    align-items:center;
  `,
  Container: styled.div`
    padding:10px 5em;
    position:relative;
    z-index:1;
    background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  `,
  ImageNetwork : styled.img`
    width:20px;
    height:20px;
    border-radius:100%;
    border:1px solid ${props => props.theme.colors.vgBlackAlpha20};
    box-sizing:content-box;
    padding:10px;
    object-fit:cover;
  `
};
