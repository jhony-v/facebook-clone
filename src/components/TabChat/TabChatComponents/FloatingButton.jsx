import React from "react";
import CircleButton from "../../Common/CircleButton";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";

const StyledFloatingCircleButton = styled(CircleButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
`;

const FloatingButton = ({ onClick }) => {
  return (
    <StyledFloatingCircleButton onClick={onClick}>
      <FiEdit size={20} />
    </StyledFloatingCircleButton>
  );
};

export default FloatingButton;
