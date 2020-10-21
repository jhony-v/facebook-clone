import CircleButton from "../../Common/CircleButton";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";

export const StyledFloatingCircleButton = styled(CircleButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
`;

export const StyledTabChatMainExpanded = styled.div`
  border-radius: 10px 10px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.colors.primaryLayout};
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10%;
  height: 480px;
  width: 350px;
  display: flex;
`;

export const StyledTabChatFillWrapper = styled(FlexWrapper).attrs({
  fDirection: "column",
})`
  width: 100%;
  height: 100%;
`;
