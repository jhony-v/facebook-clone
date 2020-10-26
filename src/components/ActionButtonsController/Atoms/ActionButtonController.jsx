import React from "react";
import TextLabel from "../../Common/TextLabel";
import { StyledRaisedButton } from "./elements";

const ActionButtonController = ({ text, icon: IconComponent, colorIcon, onClick }) => {
  return (
    <StyledRaisedButton onClick={onClick}>
      <IconComponent size={20} style={{ marginRight: "5px" }} color={colorIcon} />
      <TextLabel textSize=".9rem" variant="smooth" weight>{text}</TextLabel>
    </StyledRaisedButton>
  );
};

export default ActionButtonController;
