import FullScreenWrapper from "@fb-components/common/FullScreenWrapper";
import styled from "styled-components";

const StyledGlobal = {
  Background: styled(FullScreenWrapper)`
    background: white url("/login-graph.png") no-repeat 300px center / cover;
    display: flex;
    align-items: center;
  `,
  FormContainer: styled.div`
    padding: 10px 3em;
    position: relative;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  `,
  ImageNetwork: styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.colors.vgBlackAlpha20};
    box-sizing: content-box;
    padding: 10px;
    object-fit: cover;
  `,
  TextDanger: styled.span`
    display: block;
    padding: 10px 0;
    text-align: right;
    color: ${(props) => props.theme.colors.vgDanger};
    font-size: ${(props) => props.theme.fontSizes[100]};
  `
};

export default StyledGlobal;
