import React from "react";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import { StyledRaisedButton } from "./elements";

const ActionButtonController = ({ text, icon: IconComponent, colorIcon }) => {
  return (
    <StyledRaisedButton>
      <IconComponent size={20} style={{ marginRight: "5px" }} color={colorIcon} />
      <TextLabel textSize=".9rem" weight>{text}</TextLabel>
    </StyledRaisedButton>
  );
};

export default ActionButtonController;
