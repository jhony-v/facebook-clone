import Card from "@fb-components/common/Card";
import RaisedButton from "@fb-components/common/RaisedButton";
import SquareImage from "@fb-components/common/SquareImage";
import TextLabel from "@fb-components/common/TextLabel";
import styled, { css } from "styled-components";

export const ImageStreamUser = styled(SquareImage)`
  border-radius: 5px 5px 0 0;
  height: 200px;
`;

export const TextLabelStreamUser = styled(TextLabel)<{ isTitle?: boolean }>`
  color: ${(props) => props.theme.colors.vgTextBlack};
  font-size: ${(props) => props.theme.fontSizes[200]};
  display: block;
  padding: 5px 0;
  ${(props) =>
    props.isTitle &&
    css`
      font-weight: bold;
      font-size: ${props.theme.fontSizes[300]};
    `}
`;

export const CardWrapperDetailStreamUser = styled.div`
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardStreamUser = styled(Card)`
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

export const ButtonFollowStreamUser = styled(RaisedButton)`
  font-weight: bold;
  width: 100%;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha12};
`;
