import React from "react";
import ActionButtonsController from "../../ActionButtonsController";
import Avatar from "../../Common/Avatar";
import { StyledActionInputWrapper } from "./elements";

const ActionInputController = ({ userImage, inputPlaceholder, onClick }) => {
  return (
    <StyledActionInputWrapper onClick={onClick}>
      <Avatar src={userImage} />
      <ActionButtonsController.Input placeholder={inputPlaceholder} />
    </StyledActionInputWrapper>
  );
};

export default ActionInputController;
