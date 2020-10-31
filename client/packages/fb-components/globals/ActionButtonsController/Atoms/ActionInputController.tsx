import TextLabel from "@fb-components/TextLabel";
import React from "react";
import { StyledRaisedButtonPlaceholderInput } from "./elements";

type ActionInputControllerProps = {
  placeholder ?: string | React.ReactNode;
  onClick : () => void
}
const ActionInputController = ({ placeholder, onClick }: ActionInputControllerProps) => {
  return (
    <StyledRaisedButtonPlaceholderInput onClick={onClick}>
      <TextLabel>{placeholder}</TextLabel>
    </StyledRaisedButtonPlaceholderInput>
  );
};

ActionInputController.defaultProps = {
  onClick : () => null
}

export default ActionInputController;
