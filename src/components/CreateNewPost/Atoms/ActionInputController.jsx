import React from "react";
import Avatar from "../../Common/Avatar";
import TextLabel from "../../Common/TextLabel";
import { StyledActionInputWrapper, StyledButtonPlaceholderInput } from "./elements";

const ActionInputController = ({ userImage, inputPlaceholder }) => {
  return (
    <StyledActionInputWrapper>
      <Avatar src={userImage} />
      <StyledButtonPlaceholderInput>
        <TextLabel weight>{inputPlaceholder}</TextLabel>
      </StyledButtonPlaceholderInput>
    </StyledActionInputWrapper>
  );
};

export default ActionInputController;
