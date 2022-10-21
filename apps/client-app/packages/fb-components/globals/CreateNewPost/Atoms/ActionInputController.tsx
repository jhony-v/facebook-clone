import React from "react";
import Avatar from "@fb-components/common/Avatar";
import Wrapper from "@fb-components/common/Wrapper";
import ActionButtonsController from "../../ActionButtonsController";
import { StyledActionInputWrapper } from "./elements";

type ActionInputControllerProps = {
  userImage?: string;
  inputPlaceholder?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
const ActionInputController = ({
  userImage,
  inputPlaceholder,
  onClick
}: ActionInputControllerProps) => (
  <StyledActionInputWrapper onClick={onClick}>
    <Wrapper m="0 10px 0 0">
      <Avatar src={userImage} />
    </Wrapper>
    <ActionButtonsController.Input placeholder={inputPlaceholder} />
  </StyledActionInputWrapper>
);

export default ActionInputController;
