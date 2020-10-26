import React from "react";
import TextLabel from "../../Common/TextLabel";
import { StyledRaisedButtonPlaceholderInput } from "./elements";

const ActionInputController = ({ placeholder, onClick }) => {
  return (
    <StyledRaisedButtonPlaceholderInput onClick={onClick}>
      <TextLabel weight>{placeholder}</TextLabel>
    </StyledRaisedButtonPlaceholderInput>
  );
};

export default ActionInputController;
