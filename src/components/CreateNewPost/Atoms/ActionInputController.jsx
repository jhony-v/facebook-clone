import React from "react";
import ActionButtonsController from "../../ActionButtonsController";
import Avatar from "../../Common/Avatar";
import Wrapper from "../../Common/Wrapper";
import { StyledActionInputWrapper } from "./elements";

const ActionInputController = ({ userImage, inputPlaceholder, onClick }) => {
  return (
    <StyledActionInputWrapper onClick={onClick}>
      <Wrapper m="0 10px 0 0">
        <Avatar src={userImage} />
      </Wrapper>
      <ActionButtonsController.Input placeholder={inputPlaceholder} />
    </StyledActionInputWrapper>
  );
};

export default ActionInputController;
