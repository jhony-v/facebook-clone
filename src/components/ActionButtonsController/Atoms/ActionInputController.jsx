import React from "react";
import TextLabel from "../../Common/TextLabel";
import { StyledRaisedButtonPlaceholderInput } from "./elements";

const ActionInputController = ({ placeholder, onClick }) => {
  return (
    <StyledRaisedButtonPlaceholderInput onClick={onClick}>
      <TextLabel weight variant="smooth">{placeholder}</TextLabel>
    </StyledRaisedButtonPlaceholderInput>
  );
};

export default ActionInputController;
