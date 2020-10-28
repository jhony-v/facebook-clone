import React from "react";
import TextLabel from "@fb-components/TextLabel";
import { StyledRaisedButton } from "./elements";

type ActionButtonControllerProps = {
  text ?: string;
  icon ?: React.JSXElementConstructor<{size?:number,css?:React.CSSProperties}>;
  colorIcon ?: string;
  onClick ?: (e : React.MouseEvent<HTMLButtonElement>) => void;
}
const ActionButtonController = ({ text, icon: IconComponent, colorIcon, onClick } : ActionButtonControllerProps) => {
  return (
    <StyledRaisedButton onClick={onClick}>
      <IconComponent size={20} style={{ marginRight: "5px" }} color={colorIcon} />
      <TextLabel textSize={300} weight>{text}</TextLabel>
    </StyledRaisedButton>
  );
};

ActionButtonController.defaultProps = {
  onClick : () => null
}

export default ActionButtonController;
