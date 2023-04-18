import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";

export const StyledCreatePostWrapper = styled(FlexWrapper)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
`;

export const StyledActionInputWrapper = styled(FlexWrapper)`
  border-bottom: 1px solid ${(props) => props.theme.colors.vgBlackAlpha10};
  padding-bottom: 15px;
  margin-bottom: 10px;
`;
