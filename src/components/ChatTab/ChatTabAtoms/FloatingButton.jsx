import React from "react";
import { FiEdit } from "react-icons/fi";
import { StyledFloatingCircleButton } from "./elements";

const FloatingButton = ({ onClick }) => {
  return (
    <StyledFloatingCircleButton data-testid="floating-button" onClick={onClick}>
      <FiEdit size={20} />
    </StyledFloatingCircleButton>
  );
};

export default FloatingButton;
