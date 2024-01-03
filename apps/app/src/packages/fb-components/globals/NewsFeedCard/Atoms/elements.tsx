import FlexWrapper from "@fb-components/common/FlexWrapper";
import styled from "styled-components";

export const StyledNewsFeedWrapper = styled(FlexWrapper)`
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  margin: 2em auto;
`;

export const StyledNewsMainImage = styled.img`
  display: block;
  height: 280px;
  width: 100%;
`;
