import FlexWrapper from "@fb-components/common/FlexWrapper";
import RoundButton from "@fb-components/common/RoundButton";
import styled from "styled-components";

export const StyledFloatingCircleButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.colors.vgBlackAlpha00};
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const StyledTabChatMainExpanded = styled.div`
  background-color: ${({ theme }) => theme.colors.vgBlackAlpha00};
  border-radius: 10px 10px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10%;
  height: 480px;
  width: 350px;
  display: flex;
`;

export const StyledTabChatFillWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
