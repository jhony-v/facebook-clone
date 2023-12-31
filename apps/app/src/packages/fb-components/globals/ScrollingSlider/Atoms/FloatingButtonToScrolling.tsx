import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ButtonFloatingToMove } from "./elements";

type FloatingButtonToScrollingMoveProps = {
  position: "right" | "left";
  onClick: () => void;
};

const FloatingButtonToScrolling = ({
  onClick,
  position
}: FloatingButtonToScrollingMoveProps) => {
  let IconComponent;
  if (position === "left") {
    IconComponent = FiChevronLeft;
  } else if (position === "right") {
    IconComponent = FiChevronRight;
  }
  return (
    <ButtonFloatingToMove onClick={onClick} position={position}>
      <IconComponent />
    </ButtonFloatingToMove>
  );
};

export default FloatingButtonToScrolling;
