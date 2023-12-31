import React from "react";
import TextLabel from "@fb-components/common/TextLabel";
import { StyledRaisedButtonPlaceholderInput } from "./elements";

type ActionInputControllerProps = {
  placeholder?: string | React.ReactNode;
  onClick: () => void;
};
const ActionInputController = ({
  placeholder,
  onClick
}: ActionInputControllerProps) => (
  <StyledRaisedButtonPlaceholderInput onClick={onClick}>
    <TextLabel>{placeholder}</TextLabel>
  </StyledRaisedButtonPlaceholderInput>
);

ActionInputController.defaultProps = {
  onClick: () => {}
};

export default ActionInputController;
